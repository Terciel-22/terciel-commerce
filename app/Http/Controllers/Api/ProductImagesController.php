<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProductImages;
use App\Http\Requests\StoreProductImagesRequest;
use App\Http\Requests\UpdateProductImagesRequest;

class ProductImagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductImagesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductImagesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductImages  $productImages
     * @return \Illuminate\Http\Response
     */
    public function show(ProductImages $productImages)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductImagesRequest  $request
     * @param  \App\Models\ProductImages  $productImages
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductImagesRequest $request, ProductImages $productImages)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductImages  $productImages
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductImages $productImages)
    {
        //
    }
}
