<?php

namespace App\Models;

use App\Models\MainChoice;
use App\Models\GivenRecommendation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Recommendation extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function givenRecommendations()
    {
        return $this->hasMany(GivenRecommendation::class);
    }

    public function mainChoice()
    {
        return $this->belongsTo(MainChoice::class);
    }
}
