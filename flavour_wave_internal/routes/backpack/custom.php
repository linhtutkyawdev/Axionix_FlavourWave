<?php

use Illuminate\Support\Facades\Route;

// --------------------------
// Custom Backpack Routes
// --------------------------
// This route file is loaded automatically by Backpack\Base.
// Routes you generate using Backpack\Generators will be placed here.

Route::group([
    'prefix'     => config('backpack.base.route_prefix', 'admin'),
    'middleware' => array_merge(
        (array) config('backpack.base.web_middleware', 'web'),
        (array) config('backpack.base.middleware_key', 'admin')
    ),
    'namespace'  => 'App\Http\Controllers\Admin',
], function () { // custom admin routes
    Route::crud('user', 'UserCrudController');
    Route::crud('product', 'ProductCrudController');
    Route::crud('driver', 'DriverCrudController');
    Route::crud('preorder', 'PreorderCrudController');
    Route::crud('ingredient', 'IngredientCrudController');
    Route::crud('receipe', 'ReceipeCrudController');
    Route::crud('factory', 'FactoryCrudController');
    Route::crud('logisic', 'LogisicCrudController');
    Route::crud('order', 'OrderCrudController');
    Route::crud('preorder-product', 'PreorderProductCrudController');
    Route::crud('warehouse', 'WarehouseCrudController');
}); // this should be the absolute last line of this file