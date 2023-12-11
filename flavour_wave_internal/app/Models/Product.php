<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function orders(){
        return $this->belongsToMany(Preorder::class);
    }

    public function store(){
        return $this->belongsTo(Warehouse::class);
    }

    public function factory(){
        return $this->hasOne(Factory::class);
    }
}
