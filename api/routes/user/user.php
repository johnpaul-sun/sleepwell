<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PreQuestionController;
use App\Http\Controllers\MainQuestionController;
use App\Http\Controllers\GivenRecommendationController;

Route::group(['middleware' => 'auth:sanctum', 'prefix' => '/user'], function () {
    Route::get('/{id}', [UserController::class, 'show']);
    Route::put('/update', [UserController::class, 'update']);

    Route::get('/assess/pre-questions', [PreQuestionController::class, 'assessment']);
    Route::post('/assess/main-questions', [MainQuestionController::class, 'assessment']);
    Route::resource('/assess/given-recommendations', GivenRecommendationController::class);
});
