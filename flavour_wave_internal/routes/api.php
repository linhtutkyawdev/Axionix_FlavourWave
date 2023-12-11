<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\OrderDetailsController;
use App\Http\Controllers\Api\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// customer
Route::get('customer/allCustomers', [CustomerController::class, 'getAllCustomer']);
Route::post('customer/create', [CustomerController::class, 'createCustomer']);
Route::post('customer/delete', [CustomerController::class, 'deleteCustomer']);

//  order
Route::get('order/allOrders', [OrderController::class, 'getAllOrder']);
Route::post('order/details/create', [OrderDetailsController::class, 'createOrderDetails']);
Route::post('order/create', [OrderController::class, 'createOrder']);

// prodcut
Route::get('product/all', [ProductController::class, 'getAllProducts']);
