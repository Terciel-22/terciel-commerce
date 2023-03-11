<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\ProductFactory;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'price',
        'discount_percentage',
        'rating',
        'stock',
        'brand',
        'category_id',
        'image'
    ];

    public function productImages()
    {
        return $this->hasMany(ProductImages::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    protected static function newFactory()
    {
        return ProductFactory::new();
    }
}
