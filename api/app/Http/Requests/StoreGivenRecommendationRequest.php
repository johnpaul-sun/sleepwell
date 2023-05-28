<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGivenRecommendationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            '*.main_question_id' => 'required|numeric',
            '*.main_choice_id' => 'required|numeric',
            'recommendation_id' => 'nullable|numeric',
            'like' => 'nullable|boolean',
            'dislike' => 'nullable|boolean',
            'is_completed' => 'nullable|boolean',
        ];
    }
}
