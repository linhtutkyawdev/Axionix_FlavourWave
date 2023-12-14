<?php

namespace App\Http\Controllers\Api;


use App\Http\Requests\ProductsRequest;
use App\Models\Product;
use App\Models\Warehouse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
       return Product::latest()->get();
       
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
        return Product::where('product_id', $id)->first();
        
    }

    // get trending products
    public function trendProducts(){
       return Warehouse::orderBy('sales_issue', 'desc')->take(3)->get();
    }
}
