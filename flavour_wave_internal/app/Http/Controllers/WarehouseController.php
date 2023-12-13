<?php

namespace App\Http\Controllers;

use App\Http\Requests\WarehouseRequest;
use App\Models\Warehouse;
use Illuminate\Http\Request;

class WarehouseController extends Controller
{
    public function create(WarehouseRequest $request){
        $cleanData = $request->validated();
        Warehouse::create($cleanData);
        return response()->json(['message'=>'Adding product into warehouse is successful.']);
    }
}
