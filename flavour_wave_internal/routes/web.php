<?php

use App\Models\Product;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome',[
        'products'=>Product::all()
    ]);
});

Route::post('/products/{product}/update',function(Product $product){
    $cleandata = request()->validate([
        'image'=>'required|image'
    ]);
    $url = request()->file('image')->store('product-images');
    $product->update([
        'image_url' => $url
    ]);
    return back();
});