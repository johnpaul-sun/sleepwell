<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public static function replaceAndLower($value)
    {
        return str_replace(' ', '', strtolower($value));
    }

    public function definition()
    {
        $user_id = User::max('id');
        $lastName = fake()->lastName();
        $firstName = fake()->firstName();

        return [
            'full_name' => "$firstName $lastName",
            'email' => "$firstName.$lastName@dummy.com",
            'age' => 21,
            'gender' => fake()->randomElement(['Male', 'Female', 'Non-binary', 'Prefer not to say']),
            'password' => bcrypt('password'),
            'avatar' => User::generateAvatar($this->replaceAndLower($firstName), $user_id),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
