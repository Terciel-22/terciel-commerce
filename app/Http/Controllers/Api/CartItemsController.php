<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CartItems;
use App\Http\Requests\StoreCartItemsRequest;
use App\Http\Requests\UpdateCartItemsRequest;

use App\Models\Cart;
use App\Http\Resources\CartItemsResource; 
use Illuminate\Support\Str;

class CartItemsController extends Controller
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
     * @param  \App\Http\Requests\StoreCartItemsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCartItemsRequest $request)
    {
        $data = $request->validated();
        if(!isset($data['cart_token']))
        {
            //Walang cart token, generate cart token
            $cart_token = Str::random(64); //not secured
            //Create din ng cart
            $cart = new CartController();
            $cart->store($cart_token);
        } else 
        {
            $cart_token = $data['cart_token'];
        }

        //Retrieve current Cart
        $cart = Cart::query()->where('cart_token',$cart_token)->first();

        $cart_item = CartItems::query()
            ->where('cart_token',$cart_token)
            ->where('product_id',$data['product_id'])
            ->first();
        
        if($cart_item)
        {
            //product already exist in cart item
            //update only
            $cart_item->update([
                'quantity' => $data['quantity'],
                'price' => $data['price']
            ]);
        } else 
        {
            //add product to cart item
            CartItems::create([
                'cart_id' => $cart->id,
                'cart_token' => $cart_token,
                'product_id' => $data['product_id'],
                'quantity' => $data['quantity'],
                'price' => $data['price']
            ]);
        }

        $cart_items = CartItemsResource::collection(
            CartItems::query()->where('cart_token',$cart_token)->get()
        );
        return response(compact("cart_items","cart_token"));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CartItems  $cartItems
     * @return \Illuminate\Http\Response
     */
    public function show(CartItems $cartItems)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCartItemsRequest  $request
     * @param  \App\Models\CartItems  $cartItems
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCartItemsRequest $request, CartItems $cartItems)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CartItems  $cartItems
     * @return \Illuminate\Http\Response
     */
    public function destroy(CartItems $cartItems)
    {
        //
    }
}
