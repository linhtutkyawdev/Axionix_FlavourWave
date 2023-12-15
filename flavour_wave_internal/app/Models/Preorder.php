<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Preorder extends Model
{
    use CrudTrait;
    use HasFactory;

    public function customer(){
        return $this->belongsTo(Customer::class);
    }

    public function products(){
        return $this->belongsToMany(Product::class,'preorder_details','order_id','product_id');
    }

    public function deliver(){
        return $this->hasMany(Logistic::class);
    }
}
