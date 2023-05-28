<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\PreChoiceSeeder;
use Database\Seeders\MainChoiceSeeder;
use Database\Seeders\PreQuestionSeeder;
use Database\Seeders\MainQuestionSeeder;
use Database\Seeders\RecommendationSeeder;
use Database\Seeders\GivenRecommendationSeeder;
use Database\Seeders\NoAvailableRecommendationSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            PreQuestionSeeder::class,
            PreChoiceSeeder::class,
            MainQuestionSeeder::class,
            MainChoiceSeeder::class,
            RecommendationSeeder::class,
            GivenRecommendationSeeder::class,
            NoAvailableRecommendationSeeder::class,
        ]);
    }
}
