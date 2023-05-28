<?php

namespace App\Models;

use App\Models\PreChoice;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PreQuestion extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $hidden = ['created_at', 'updated_at'];

    public function preChoices()
    {
        return $this->hasMany(PreChoice::class);
    }
}
