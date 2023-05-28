<?php

namespace Database\Seeders;

use App\Models\PreChoice;
use App\Models\PreQuestion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PreChoiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (PreQuestion::all() as $preQuestion) {
            PreChoice::factory(3)->create([
                'pre_question_id' => $preQuestion->id
            ]);
        }
    }
}
