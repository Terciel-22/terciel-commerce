<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CartItemsResource extends JsonResource
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
            'cart_id' => $this->cart_id,
            'cart_token' => $this->cart_token,
            'product' => new ProductResource($this->product),
            'quantity' => $this->quantity,
            'price' => $this->price
        ];
    }
}
