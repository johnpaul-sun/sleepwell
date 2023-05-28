<?php

namespace App\Http\Controllers;

use App\Models\PreQuestion;
use Illuminate\Http\Request;
use App\Http\Resources\PreQuestionResource;
use App\Http\Requests\StorePreQuestionRequest;
use App\Http\Requests\UpdatePreQuestionRequest;

class PreQuestionController extends Controller
{
    public function index()
    {
        return PreQuestionResource::collection(PreQuestion::get());
    }

    public function store(StorePreQuestionRequest $request)
    {
        $pre_question = PreQuestion::create([
            "pre_question" => $request->pre_question
        ]);

        return response()->json([
            'message' => 'Successfully created new Pre Question.',
            'data' => $pre_question->only('pre_question', 'id')
        ]);
    }

    public function show($id)
    {
        $pre_question = PreQuestion::find($id);

        if (!$pre_question) {
            return response()->json(['message' => 'Pre Question not found.']);
        }

        return new PreQuestionResource($pre_question);
    }

    public function update(UpdatePreQuestionRequest $request, $id)
    {
        $pre_question = PreQuestion::find($id);

        if (!$pre_question) {
            return response()->json(['message' => 'Pre Question not found.']);
        }

        $pre_question->update($request->only('pre_question'));
        return response()->json([
            'message' => 'Successfully updated Pre Question.',
            'data' => $pre_question->only('pre_question', 'id')
        ]);
    }

    public function destroy($id)
    {
        $preQuestion = PreQuestion::find($id);

        if (!$preQuestion) {
            return response()->json(['message' => 'Pre Question not found.']);
        }

        $preQuestion->delete();
        return response()->json(['message' => 'Successfully deleted Pre Question.']);
    }

    public function assessment()
    {
        $pre_questions = PreQuestion::with('preChoices')->get();

        return response()->json([
            'pre_questions' => $pre_questions,
        ]);
    }
}
