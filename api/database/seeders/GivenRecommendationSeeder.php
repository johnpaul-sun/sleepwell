<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\PreChoice;
use App\Models\MainChoice;
use App\Models\PreQuestion;
use App\Models\MainQuestion;
use App\Models\Recommendation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\GivenRecommendation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class GivenRecommendationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 3; $i++) {
            foreach (User::all() as $user) {
                $activeUser = $user->id;
                foreach (PreQuestion::all() as $preQuestion) {
                    $activePreQuestion = $preQuestion->id;

                    $availablePreChoices = PreChoice::where('pre_question_id', $activePreQuestion)->get();
                    $preFirstIndex = $availablePreChoices[0]->id;
                    $preLastIndex = $availablePreChoices[count($availablePreChoices) - 1]->id;
                    $selectedPreChoice = rand($preFirstIndex, $preLastIndex);

                    foreach (MainQuestion::all() as $mainQuestion) {
                        $activeMainQuestion = $mainQuestion->id;

                        $availableMainChoices = MainChoice::where('main_question_id', $activeMainQuestion)->get();
                        $mainFirstIndex = $availableMainChoices[0]->id;
                        $mainLastIndex = $availableMainChoices[count($availableMainChoices) - 1]->id;
                        $selectedMainChoice = rand($mainFirstIndex, $mainLastIndex);

                        $availableRecommendations = Recommendation::where('main_choice_id', $selectedMainChoice)->get();
                        $recommendationFirstIndex = $availableRecommendations[0]->id;
                        $recommendationLastIndex = $availableRecommendations[count($availableRecommendations) - 1]->id;
                        $randomRecommendation = rand($recommendationFirstIndex, $recommendationLastIndex);

                        $bestRecommendationId = 0;
                        $bestRecommendation = 0;

                        foreach ($availableRecommendations as $recommendation) {
                            $difference = $recommendation['like_counts'] - $recommendation['dislike_counts'];
                            if ($difference > $bestRecommendation) {
                                $bestRecommendation = $difference;
                                $bestRecommendationId = $recommendation->id;
                            }
                        }

                        GivenRecommendation::factory(1)->create([
                            'user_id' => $activeUser,
                            'main_question_id' => $activeMainQuestion,
                            'main_choice_id' => $selectedMainChoice,
                            'recommendation_id' => $bestRecommendationId ?: null
                        ]);
                    }
                }
            }
        }
    }
}
