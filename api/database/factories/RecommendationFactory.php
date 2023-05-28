<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recommendation>
 */
class RecommendationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "recommendation" => fake()->paragraph(1, 3),
            "like_counts" => fake()->randomNumber(2),
            "dislike_counts" => fake()->randomNumber(2)
        ];
    }
}
