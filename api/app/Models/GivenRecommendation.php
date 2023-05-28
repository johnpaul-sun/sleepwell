<?php

namespace App\Models;

use App\Models\User;
use App\Models\MainChoice;
use App\Models\MainQuestion;
use App\Models\Recommendation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GivenRecommendation extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function mainQuestion()
    {
        return $this->belongsTo(MainQuestion::class);
    }

    public function mainChoice()
    {
        return $this->belongsTo(MainChoice::class);
    }

    public function recommendation()
    {
        return $this->belongsTo(Recommendation::class);
    }
}
