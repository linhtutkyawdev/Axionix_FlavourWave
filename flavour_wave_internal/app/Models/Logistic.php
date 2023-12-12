<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logistic extends Model
{
    use HasFactory;

    public function received_orders(){
        return $this->belongsTo(Preorder::class,'preorder_id');
    }

    public function driver_info(){
        return $this->belongsTo(Driver::class,'driver_id');
    }
}
