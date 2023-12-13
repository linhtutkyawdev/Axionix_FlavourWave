<?php

namespace App\Http\Controllers;

use App\Models\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class FactoryController extends Controller
{
    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'product_id' => ['required',Rule::exists('products','id')],
            'expected' => 'required',
            'actual' => 'required'
        ]);
        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }

        Factory::create($validator->validate());
        return response()->json([
            'message' => 'Create factory is successful.'
        ]);
    }
}
