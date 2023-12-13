<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;

class DriverController extends Controller
{
    public function show(){
        $drivers = Driver::all();
        return response()->json(['drivers' => $drivers]);
    }
}
