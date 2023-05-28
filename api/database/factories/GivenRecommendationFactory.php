<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GivenRecommendation>
 */
class GivenRecommendationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $is_completed = fake()->boolean();
        $is_liked = $is_completed ? fake()->boolean() : false;
        return [
            "is_completed" => $is_completed,
            "like" => $is_completed ? $is_liked : false,
            "dislike" => $is_completed ? !$is_liked : false
        ];
    }
}
