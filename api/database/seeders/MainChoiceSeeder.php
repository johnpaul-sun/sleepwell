<?php

namespace Database\Seeders;

use App\Models\MainChoice;
use App\Models\MainQuestion;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MainChoiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (MainQuestion::all() as $mainQuestion) {
            MainChoice::factory(3)->create([
                'main_question_id' => $mainQuestion->id
            ]);
        }
    }
}
