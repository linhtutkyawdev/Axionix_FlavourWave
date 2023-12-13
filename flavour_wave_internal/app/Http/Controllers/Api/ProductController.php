<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductsRequest;
use App\Models\Product;
use App\Models\Warehouse;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function create(ProductsRequest $request){
        $cleanData = $request->validated();
        Product::create($cleanData);
        return response()->json([
            'message'=>'Create Product is successful.'
        ]);
    }

    // import all products to frontend
    public function all(){
        $products = Product::latest()->get();
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
