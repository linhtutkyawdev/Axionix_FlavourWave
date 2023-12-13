<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receipe extends Model
{
    use HasFactory;

    public function ingredient(){
        return $this->belongsTo(Ingredient::class);
    }

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
