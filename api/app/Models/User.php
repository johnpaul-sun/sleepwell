<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use App\Models\GivenRecommendation;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function givenRecommendations()
    {
        return $this->hasMany(GivenRecommendation::class);
    }

    public static function id()
    {
        return auth('sanctum')->id();
    }

    public static function registerUser($request)
    {
        $user = User::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'age' => $request->age,
            'gender' => $request->gender,
            'password' => bcrypt($request->password),
        ]);
        $user_id = $user->id;

        $avatar = User::generateAvatar($request->full_name, $user_id);
        $user->findOrFail($user_id)->update(["avatar" => $avatar]);

        return $user;
    }

    public static function generateAvatar($fname, $user_id)
    {
        $full_name = str_replace(' ', '', strtolower($fname));
        return "https://api.multiavatar.com/$full_name&id=$user_id&unique=" . uniqid() . ".png";
    }

    public static function replaceAndLower($value)
    {
        return str_replace(' ', '', strtolower($value));
    }
}
