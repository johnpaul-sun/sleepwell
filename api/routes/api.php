<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', function () {
    return response()->json([
        "message" => "You are at the version 1 of this api",
        "more" => "api documentation"
    ]);
});

require __DIR__ . '/user/auth.php';
require __DIR__ . '/user/user.php';

require __DIR__ . '/assessment/index.php';

