<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    // import all products to frontend
    public function getAllProduct(){
        $products = Product::latest();
        return response()->json([
            'products' => $products,
        ]);
    }

    // import 4 random products to frontend
    public function get4Products(){
        $randomProducts = Product::inRandomOrder()->limit(4)->get();
        return response()->json([
            'randomProducts' => $randomProducts,
            'randomProductsCount' => '4',
        ]);
    }

    // get product details
    public function detailProduct($id){
        $product = Product::where('product_id', $id)->first();
        return response()->json([
            'product' => $product
        ]);
    }

    // get trending products
    public function trendProducts(){
        $trending = Warehouse::orderBy('')->select('sales_issues')->limit(5)->get();
    }
}
