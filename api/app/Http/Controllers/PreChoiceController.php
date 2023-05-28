<?php

namespace App\Http\Controllers;

use App\Models\PreChoice;
use App\Http\Requests\StorePreChoiceRequest;
use App\Http\Requests\UpdatePreChoiceRequest;
use App\Http\Resources\PreChoiceResource;

class PreChoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PreChoiceResource::collection(PreChoice::get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePreChoiceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePreChoiceRequest $request)
    {
        $pre_choice = PreChoice::create([
            "pre_question_id" => $request->pre_question_id,
            "pre_choice" => $request->pre_choice
        ]);

        return response()->json([
            'message' => 'Successfully created new Pre Choice.',
            'data' => $pre_choice->only('pre_choice', 'id')
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PreChoice  $preChoice
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $pre_choice = PreChoice::find($id);

        if (!$pre_choice) {
            return response()->json(['message' => 'Pre Choice not found.']);
        }

        return new PreChoiceResource($pre_choice);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePreChoiceRequest  $request
     * @param  \App\Models\PreChoice  $preChoice
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePreChoiceRequest $request, $id)
    {
        $pre_choice = PreChoice::find($id);

        if (!$pre_choice) {
            return response()->json(['message' => 'Pre Choice not found.']);
        }

        $pre_choice->update($request->only('pre_choice'));
        return response()->json([
            'message' => 'Successfully updated Pre Choice.',
            'data' => $pre_choice->only('pre_choice', 'id')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PreChoice  $preChoice
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $preChoice = PreChoice::find($id);

        if (!$preChoice) {
            return response()->json(['message' => 'Pre Choice not found.']);
        }

        $preChoice->delete();
        return response()->json(['message' => 'Successfully deleted Pre Choice.']);
    }
}
