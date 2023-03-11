<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\FeaturedProductController;
use App\Http\Controllers\Api\CategoryController;
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
    
    Route::apiResource("/products",ProductController::class);
    Route::post("/logout",[AuthController::class, "logout"]);
});

Route::get("/products",  [ProductController::class,"index"]);
Route::get("/product/{id}", [ProductController::class,"displayProduct"]);
Route::get("/featured-products", [FeaturedProductController::class,"index"]);
Route::get("/categories", [CategoryController::class,"index"]);
Route::post("/register",[AuthController::class, "register"]);
Route::post("/login",[AuthController::class, "login"]);
