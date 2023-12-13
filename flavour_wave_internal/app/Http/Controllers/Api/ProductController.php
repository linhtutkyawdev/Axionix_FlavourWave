<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use App\Models\Warehouse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    // import all products to frontend
    public function getAllProducts(){
        $products = Product::get();
        return response()->json([
            'products' => $products,
        ]);
    }

    // import 4 random products to frontend
    public function get4Products(){
        $randomProducts = Product::inRandomOrder()->limit(4)->get();
        return response()->json([
            'randomProducts' => $randomProducts,
            'randomProductsCount' => count($randomProducts),
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
        $trending = Warehouse::orderBy('sales_issue', 'desc')->take(3)->get();
        return response()->json([
            'trending' => $trending,
        ]);
    }
}
