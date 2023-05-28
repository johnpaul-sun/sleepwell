<?php

namespace App\Http\Controllers;

use App\Models\Recommendation;
use App\Http\Requests\StoreRecommendationRequest;
use App\Http\Requests\UpdateRecommendationRequest;
use App\Http\Resources\RecommendationResource;

class RecommendationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return RecommendationResource::collection(Recommendation::get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreRecommendationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRecommendationRequest $request)
    {
        $recommendation = Recommendation::create([
            "main_choice_id" => $request->main_choice_id,
            "recommendation" => $request->recommendation
        ]);

        return response()->json([
            'message' => 'Successfully created new Recommendation.',
            'data' => $recommendation->only('recommendation', 'id')
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Recommendation  $recommendation
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $recommendation = Recommendation::find($id);

        if (!$recommendation) {
            return response()->json(['message' => 'Recommendation not found.']);
        }

        return new RecommendationResource($recommendation);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateRecommendationRequest  $request
     * @param  \App\Models\Recommendation  $recommendation
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRecommendationRequest $request, $id)
    {
        $recommendation = Recommendation::find($id);

        if (!$recommendation) {
            return response()->json(['message' => 'Recommendation not found.']);
        }

        $recommendation->update($request->only('recommendation'));
        return response()->json([
            'message' => 'Successfully updated Recommendation.',
            'data' => $recommendation->only('recommendation', 'id')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Recommendation  $recommendation
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $recommendation = Recommendation::find($id);

        if (!$recommendation) {
            return response()->json(['message' => 'Recommendation not found.']);
        }

        $recommendation->delete();
        return response()->json(['message' => 'Successfully deleted Recommendation.']);
    }
}
