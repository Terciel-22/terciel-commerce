<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\FeaturedProductController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\CartItemsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware("auth:sanctum")->group(function(){
    Route::get("/user", function (Request $request) {
        return $request->user();
    });
    
    Route::post("/logout",[AuthController::class, "logout"]);
});
Route::apiResource("products",ProductController::class);
Route::apiResource("cart-items",CartItemsController::class);
Route::get("/cart-items-with-token/{token}",[CartItemsController::class,"showWithCartToken"]);
Route::apiResource("featured-products", FeaturedProductController::class);
Route::apiResource("categories", CategoryController::class);
Route::apiResource("blogs", BlogController::class);

Route::post("/register",[AuthController::class, "register"]);
Route::post("/login",[AuthController::class, "login"]);
