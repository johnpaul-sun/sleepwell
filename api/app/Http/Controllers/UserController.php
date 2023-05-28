<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Routing\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UpdateUserRequest;


class UserController extends Controller
{
    public function index()
    {
        return UserResource::collection(User::get());
    }

    public function show($id)
    {
        $user = User::find($id) || Auth::id();

        if (!$user) {
            return response()->json(['message' => 'User not found.']);
        }

        return new UserResource($user);
    }

    public function update(UpdateUserRequest $request)
    {
        $userId = auth()->id();
        $user = User::findOrFail($userId);
        $request->validate(['password' => ['sometimes', 'required', 'confirmed']]);

        if ($request->current_password || $request->password_confirmation || $request->password) {
            if (!$request->password) {
                return response()->json(['error' => 'New password is required.'], 400);
            }
            if (!Hash::check($request->current_password, $user->password)) {
                return response()->json(['error' => 'The provided current password is incorrect.'], 400);
            }
        }

        $user->update([
            'full_name' => $request->full_name ?: $user->full_name,
            'email' => $request->email ?: $user->email,
            'age' => $request->age ?: $user->age,
            'gender' => $request->gender ?: $user->gender,
            'avatar' => $request->avatar ? $user->generateAvatar($user->replaceAndLower($user->full_name), $userId) : $user->avatar,
            'password' => $request->filled('password') ? bcrypt($request->password) : $user->password,
        ]);

        return response()->json([
            'message' => 'User updated successfully',
            'data' => new UserResource($user)
        ]);
    }
}
