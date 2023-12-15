<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use CrudTrait;
    use HasFactory;

    public function receipes(){
        return $this->hasMany(Receipe::class);
    }
}
