<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReceipesRequest;
use App\Models\Receipe;
use Illuminate\Http\Request;

class ReceipesController extends Controller
{
    public function create(ReceipesRequest $request){
        $cleanData =$request->validated();
        Receipe::create($cleanData);
        return response()->json(['message'=>'Create receipe for product is successful.']);
    }
}
