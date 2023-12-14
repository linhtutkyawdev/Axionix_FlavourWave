<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\OrderDetailsController;
use App\Http\Controllers\Api\PreorderCountController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\FactoryController;
use App\Http\Controllers\IngredientsController;
use App\Http\Controllers\LogisticsController;
use App\Http\Controllers\ReceipesController;
use App\Http\Controllers\WarehouseController;
use App\Models\Driver;
use App\Models\Warehouse;

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
    Route::get('/customers', [CustomerController::class, 'show']);
    Route::post('customer/create', [CustomerController::class, 'createCustomer']);
    Route::post('customer/delete', [CustomerController::class, 'deleteCustomer']);

    //  order
    Route::get('customers/{id}/preorders', [OrderController::class, 'getPreorders']);
    Route::post('preorders/create', [OrderController::class, 'createPreorder']);
    Route::get('preorders/{id}', [OrderController::class, 'getPreOrder']);
    Route::post('preorders/{preorder:order_id}/update', [OrderController::class, 'update']);

    // product
    Route::get('/products', [ProductController::class, 'all']);
    Route::post('/product/create', [ProductController::class, 'create']);

    //driver
    Route::get('/drivers',[DriverController::class,'show']);

    //ingredients
    Route::get('/ingredients',[IngredientsController::class,'show']);
    Route::post('/ingredient/create',[IngredientsController::class,'create']);

    //factories
    Route::post('/factories',[FactoryController::class,'store']);

    //logistics
    Route::post('/deliver',[LogisticsController::class,'make']);

    //receipe
    Route::post('/receipe/create',[ReceipesController::class,'create']);

    //warehouse
    Route::post('/warehouse/create',[WarehouseController::class,'create']);
    Route::post('order/chart', [PreorderCountController::class, 'preorderCountChart']);
