<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{

    public static $wrap = false;
    
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        $category = new CategoryResource($this->category);

        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'price' => $this->price,
            'discount_percentage' => $this->discount_percentage,
            'rating' => $this->rating,
            'stock' => $this->stock,
            'brand' => $this->brand,
            'category_id' => $this->category_id,
            'category_title' => $category->title,
            'category_products' => $category->products,
            'image' => $this->image,
            'other_images' => ProductImagesResource::collection($this->productImages),
            'created_at' => $this->created_at !== null ? $this->created_at->format('Y-m-d') : null,
        ];
    }
}
