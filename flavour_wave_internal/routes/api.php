<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\OrderDetailsController;

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

// frontend

    // customer
    Route::get('customer/allCustomers', [CustomerController::class, 'getAllCustomer']);
    Route::post('customer/create', [CustomerController::class, 'createCustomer']);
    Route::post('customer/delete', [CustomerController::class, 'deleteCustomer']);

    //  order
    Route::post('order/allorders/customer', [OrderController::class, 'getAllOrders']);
    Route::post('order/create', [OrderController::class, 'createOrder']);
    Route::post('order/editPageOrder', [OrderController::class, 'editOrderPage']);
    Route::post('order/editOrder', [OrderController::class, 'editOrderPage']);

    Route::post('order/details/create', [OrderDetailsController::class, 'createOrderDetails']);
    Route::post('order/eachOrder/customer', [OrderDetailsController::class, 'eachOrderDetails']);
    Route::post('order/details/update', [OrderDetailsController::class, 'editOrderDetails']);

    // product
    Route::get('product/all', [ProductController::class, 'getAllProducts']);
    Route::get('product/four', [ProductController::class, 'get4Products']);
    Route::post('product/details', [ProductController::class, 'detailProduct']);
    Route::get('product/trending', [ProductController::class, 'trendProducts']);

    Route::post('/acceptOrder/{id}', [StatusController::class, 'acceptOrder']);

