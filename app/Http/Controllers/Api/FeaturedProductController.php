<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FeaturedProduct;
use App\Http\Requests\StoreFeaturedProductRequest;
use App\Http\Requests\UpdateFeaturedProductRequest;
use App\Http\Resources\FeaturedProductResource; 

class FeaturedProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FeaturedProductResource::collection(
            FeaturedProduct::all()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreFeaturedProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFeaturedProductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FeaturedProduct  $featuredProduct
     * @return \Illuminate\Http\Response
     */
    public function show(FeaturedProduct $featuredProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFeaturedProductRequest  $request
     * @param  \App\Models\FeaturedProduct  $featuredProduct
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFeaturedProductRequest $request, FeaturedProduct $featuredProduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FeaturedProduct  $featuredProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(FeaturedProduct $featuredProduct)
    {
        //
    }
}
