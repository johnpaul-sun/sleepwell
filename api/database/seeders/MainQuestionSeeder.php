<?php

namespace Database\Seeders;

use App\Models\PreChoice;
use App\Models\MainQuestion;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MainQuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (PreChoice::all() as $preChoice) {
            MainQuestion::factory(3)->create([
                'pre_choice_id' => $preChoice->id
            ]);
        }
    }
}
