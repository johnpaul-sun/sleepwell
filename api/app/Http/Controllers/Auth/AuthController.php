<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\GivenRecommendation;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\LoginRequest;

class AuthController extends Controller
{
    public function index(Request $request)
    {
        return User::findOrFail($request->user()->id);
    }

    public function store(LoginRequest $request)
    {
        $request->authenticate();
        $user = User::where('email', $request->email)->first();
        $token = $user->createToken('access-token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function destroy()
    {
        auth()->user()->currentAccessToken()->delete();
        return response()->json(["message" => "Signed out successfully!"]);
    }
}
