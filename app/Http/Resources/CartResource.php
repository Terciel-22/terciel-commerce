<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'cart_items' => CartItemsResource::collection($this->cartItems),
            'cart_token' => $this->cart_token,
            'total_quantity' => $this->total_quantity,
            'total_price' => $this->total_price
        ];
    }
}
