<?php

namespace Database\Seeders;

use App\Models\NoAvailableRecommendation;
use App\Models\Recommendation;
use Illuminate\Database\Seeder;

class NoAvailableRecommendationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        NoAvailableRecommendation::create(['message' => 'We apologize for the inconvenience, but it seems that the number of recommendations available is currently limited. Please bear with us as we work on providing you with an update that will include more recommendations.We are doing our best to get them to you as soon as possible, so stay tuned and thank you for your patience.']);
    }
}
