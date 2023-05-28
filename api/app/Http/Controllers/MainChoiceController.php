<?php

namespace App\Http\Controllers;

use App\Models\MainChoice;
use App\Http\Requests\StoreMainChoiceRequest;
use App\Http\Requests\UpdateMainChoiceRequest;
use App\Http\Resources\MainChoiceResource;

class MainChoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return MainChoiceResource::collection(MainChoice::get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMainChoiceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMainChoiceRequest $request)
    {
        $main_choice = MainChoice::create([
            "main_question_id" => $request->main_question_id,
            "main_choice" => $request->main_choice
        ]);

        return response()->json([
            'message' => 'Successfully created new Main Choice.',
            'data' => $main_choice->only('main_choice', 'id')
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MainChoice  $mainChoice
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $main_choice = MainChoice::find($id);

        if (!$main_choice) {
            return response()->json(['message' => 'Main Choice not found.']);
        }

        return new MainChoiceResource($main_choice);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMainChoiceRequest  $request
     * @param  \App\Models\MainChoice  $mainChoice
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMainChoiceRequest $request, $id)
    {
        $main_choice = MainChoice::find($id);

        if (!$main_choice) {
            return response()->json(['message' => 'Main Choice not found.']);
        }

        $main_choice->update($request->only('main_choice'));
        return response()->json([
            'message' => 'Successfully updated Main Choice.',
            'data' => $main_choice->only('main_choice', 'id')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MainChoice  $mainChoice
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $mainChoice = MainChoice::find($id);

        if (!$mainChoice) {
            return response()->json(['message' => 'Main Choice not found.']);
        }

        $mainChoice->delete();
        return response()->json(['message' => 'Successfully deleted Main Choice.']);
    }
}
