<?php

namespace Database\Seeders;

use App\Models\MainChoice;
use App\Models\Recommendation;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RecommendationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (MainChoice::all() as $mainChoice) {
            Recommendation::factory(3)->create([
                'main_choice_id' => $mainChoice->id
            ]);
        }
    }
}
