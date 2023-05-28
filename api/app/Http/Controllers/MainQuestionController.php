<?php

namespace App\Http\Controllers;

use App\Models\PreChoice;
use App\Models\MainChoice;
use App\Models\MainQuestion;
use Illuminate\Http\Request;
use App\Http\Resources\MainQuestionResource;
use App\Http\Requests\StoreMainQuestionRequest;
use App\Http\Requests\UpdateMainQuestionRequest;

class MainQuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return MainQuestionResource::collection(MainQuestion::get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMainQuestionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMainQuestionRequest $request)
    {
        $main_question = MainQuestion::create([
            "pre_choice_id" => $request->pre_choice_id,
            "main_question" => $request->main_question
        ]);

        return response()->json([
            'message' => 'Successfully created new Main Question.',
            'data' => $main_question->only('main_question', 'id')
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MainQuestion  $mainQuestion
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $main_question = MainQuestion::find($id);

        if (!$main_question) {
            return response()->json(['message' => 'Main Question not found.']);
        }

        return new MainQuestionResource($main_question);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMainQuestionRequest  $request
     * @param  \App\Models\MainQuestion  $mainQuestion
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMainQuestionRequest $request, $id)
    {
        $main_question = MainQuestion::find($id);

        if (!$main_question) {
            return response()->json(['message' => 'Main Question not found.']);
        }

        $main_question->update($request->only('main_question'));
        return response()->json([
            'message' => 'Successfully updated Main question.',
            'data' => $main_question->only('main_question', 'id')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MainQuestion  $mainQuestion
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $mainQuestion = MainQuestion::find($id);

        if (!$mainQuestion) {
            return response()->json(['message' => 'Main Question not found.']);
        }

        $mainQuestion->delete();
        return response()->json(['message' => 'Successfully deleted Main Question.']);
    }

    public function assessment(Request $request)
    {
        $main_questions = MainQuestion::whereIn('pre_choice_id', collect($request)->pluck('pre_choice'))->get();

        $main_choices = [];
        foreach ($request->all() as $pre_choice) {

            $main_choices = MainQuestion::with(['mainChoices' => function ($query) use ($main_questions) {
                $main_questions->whereIn('pre_choice_id', $main_questions->pluck('id'));
            }])->where('pre_choice_id', $pre_choice['pre_choice'])->get();
        }

        return response()->json([
            'main_questions' => array_values($main_choices->toArray()),
        ]);
    }
}
