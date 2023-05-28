<?php

namespace App\Models;

use App\Models\PreChoice;
use App\Models\MainChoice;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MainQuestion extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $hidden = ['created_at', 'updated_at'];

    public function mainChoices()
    {
        return $this->hasMany(MainChoice::class);
    }

    public function preChoice()
    {
        return $this->belongsTo(PreChoice::class);
    }
}
