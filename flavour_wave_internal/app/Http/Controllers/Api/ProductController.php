<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // import all products to frontend
    public function getAllProduct(){
        $products = Product::latest();
        return response()->json([
            'products' => $products,
        ]);
    }
}
