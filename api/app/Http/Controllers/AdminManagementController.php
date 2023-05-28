<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\PreChoice;
use App\Models\MainChoice;
use App\Models\PreQuestion;
use App\Models\MainQuestion;
use Illuminate\Http\Request;
use App\Models\Recommendation;
use App\Models\GivenRecommendation;
use App\Http\Resources\PreQuestionResource;

class AdminManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pre_questions = PreQuestion::with(['preChoices.mainQuestions.mainChoices.recommendations'])->get();

        return response()->json([
            "assessment" => $pre_questions,
            "data" => [
                "total_pre_questions" => PreQuestion::get()->count(),
                "total_pre_choices" => PreChoice::get()->count(),
                "total_main_questions" => MainQuestion::get()->count(),
                "total_main_choices" => MainChoice::get()->count(),
                "total_recommendations" => Recommendation::get()->count(),
            ],
        ], 200);
    }

    public function getAllUsersData()
    {
        $users = User::with('givenRecommendations')->where('is_admin', false)->get();

        $result = [];

        foreach ($users as $user) {
            $total_liked_recommendations = 0;
            $total_disliked_recommendations = 0;
            $total_in_progress_recommendations = 0;
            $liked_recommendations = [];
            $disliked_recommendations = [];
            $in_progress_recommendations = [];

            foreach ($user->givenRecommendations as $recommendation) {
                if ($recommendation->is_completed) {
                    if ($recommendation->like) {
                        $total_liked_recommendations++;
                        $liked_recommendations[] = $this->getAssessmentData($recommendation);
                    } else {
                        $total_disliked_recommendations++;
                        $disliked_recommendations[] = $this->getAssessmentData($recommendation);
                    }
                } else {
                    $total_in_progress_recommendations++;
                    $in_progress_recommendations[] = $this->getAssessmentData($recommendation);
                }
            }

            $result[] = [
                'full_name' => $user->full_name,
                'avatar' => $user->avatar,
                'age' => $user->age,
                'gender' => $user->gender,
                'email' => $user->email,
                'total_liked_recommendations' => $total_liked_recommendations,
                'total_disliked_recommendations' => $total_disliked_recommendations,
                'total_in_progress_recommendations' => $total_in_progress_recommendations,
                'liked_recommendations' => $liked_recommendations,
                'disliked_recommendations' => $disliked_recommendations,
                'in_progress_recommendations' => $in_progress_recommendations,
            ];
        }

        return response()->json([
            "data" => [
                "total_users" => User::get()->count(),
                "total_assessment_takers" => GivenRecommendation::distinct()->pluck('user_id')->count(),
                "total_recommended_likers" => GivenRecommendation::where('like', true)->get()->count(),
                "total_recommended_dislikers" => GivenRecommendation::where('dislike', true)->get()->count(),
            ],
            'userData' => $result
        ]);
    }

    public function getAssessmentData($recommendation)
    {
        $mainQuestion = MainQuestion::find($recommendation->main_question_id);
        $mainChoice = MainChoice::find($recommendation->main_choice_id);
        $preChoice = PreChoice::find($mainQuestion->first()->pre_choice_id);
        $preQuestion = PreQuestion::find($preChoice->first()->pre_question_id);

        return [
            'pre_question' => $preQuestion->first()->pre_question ?? null,
            'pre_choice' => $preChoice->first()->pre_choice ?? null,
            'main_question' =>  $mainQuestion->main_question ?? null,
            'main_choice' => $mainChoice->main_choice ?? null,
            'recommendation' => $recommendation->recommendation->recommendation ?? null,
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
