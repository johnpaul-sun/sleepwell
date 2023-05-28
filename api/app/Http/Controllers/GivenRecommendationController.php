<?php

namespace App\Http\Controllers;

use App\Models\MainChoice;
use App\Models\Recommendation;
use App\Models\GivenRecommendation;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\GivenRecommendationResource;
use App\Http\Requests\StoreGivenRecommendationRequest;
use App\Http\Requests\UpdateGivenRecommendationRequest;

class GivenRecommendationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_id = Auth::id();
        $given_recommendations = GivenRecommendationResource::collection(GivenRecommendation::where('user_id', $user_id)->get());
        $latest_recommendations = $given_recommendations->where('is_completed', false)->sortByDesc('updated_at');
        $completed_recommendations = $given_recommendations->where('is_completed', true)->sortByDesc('updated_at');

        return response()->json([
            "latest" => array_values($latest_recommendations->toArray()),
            "completed" => array_values($completed_recommendations->toArray())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreGivenRecommendationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGivenRecommendationRequest $request)
    {
        $user_id = Auth::id();
        foreach ($request->all() as $mainQuestion) {
            $active_main_question = $mainQuestion['main_question_id'];
            $selected_main_choice = $mainQuestion['main_choice_id'];

            $taken_recommendations = GivenRecommendation::where('user_id', $user_id)->where('is_completed', true)->pluck('recommendation_id');
            $filteredRecommendations = Recommendation::where('main_choice_id', $selected_main_choice)->whereNotIn('id', $taken_recommendations)->get();

            $bestRecommendationId = 0;
            $bestRecommendation = 0;

            foreach ($filteredRecommendations as $recommendation) {
                $difference = $recommendation['like_counts'] - $recommendation['dislike_counts'];
                if ($difference > $bestRecommendation) {
                    $bestRecommendation = $difference;
                    $bestRecommendationId = $recommendation->id;
                }
            }
            GivenRecommendation::create([
                'user_id' => $user_id,
                'main_question_id' => $active_main_question,
                'main_choice_id' => $selected_main_choice,
                'recommendation_id' => $bestRecommendationId ?: null
            ]);
        }

        return response()->json([
            'message' => 'Given Recommendations saved successfully.'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GivenRecommendation  $givenRecommendation
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $given_recommendations = GivenRecommendation::where('user_id', $id)->where('is_completed', true)->get();

        return $given_recommendations;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateGivenRecommendationRequest  $request
     * @param  \App\Models\GivenRecommendation  $givenRecommendation
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateGivenRecommendationRequest $request, $id)
    {
        $given_recommendation = GivenRecommendation::findOrFail($id);
        $is_liked = $request->input('like');
        $given_recommendation->update([
            'like' => $is_liked == true,
            'dislike' => $is_liked == false,
            'is_completed' => true
        ]);

        return new GivenRecommendationResource($given_recommendation);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GivenRecommendation  $givenRecommendation
     * @return \Illuminate\Http\Response
     */
    public function destroy(GivenRecommendation $givenRecommendation)
    {
        //
    }
}
