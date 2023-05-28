<?php

namespace App\Http\Resources;

use App\Models\MainChoice;
use App\Models\MainQuestion;
use App\Models\NoAvailableRecommendation;
use App\Models\Recommendation;
use Illuminate\Http\Resources\Json\JsonResource;

class GivenRecommendationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'like' => $this->like,
            'dislike' => $this->dislike,
            'is_completed' => $this->is_completed,
            'main_question' => MainQuestion::findOrFail($this->main_question_id)->main_question,
            'main_choice' => MainChoice::findOrFail($this->main_choice_id)->main_choice,
            'recommendation' => Recommendation::find($this->recommendation_id)->recommendation ?? null,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
