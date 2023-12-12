<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    // get all products
    public function getAllProducts(){
        $products = Product::latest();
        return view('', compact('products'));
    }

    // create page
    public function createProductPage(){
        return view('');
    }

    // create new product
    public function createProduct($request){
        $validator = Validate($request->all);
        $this->inputProductDetails($request);
    }
}
