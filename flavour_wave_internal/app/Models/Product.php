<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $table = 'products';

    public function orders(){
        return $this->belongsToMany(Preorder::class,'preorder_details','order_id','product_id');
    }

    public function inventory(){
        return $this->hasOne(Warehouse::class);
    }

    public function detials(){
        return $this->hasOne(Factory::class);
    }

    public function receipes(){
        return $this->hasMany(Receipe::class);
    }
}
