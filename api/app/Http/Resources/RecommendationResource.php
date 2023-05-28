<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RecommendationResource extends JsonResource
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
            'recommendation' => $this->recommendation,
            'like_counts' => $this->like_counts,
            'dislike_counts' => $this->dislike_counts,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
