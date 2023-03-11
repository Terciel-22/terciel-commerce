<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\ProductImagesFactory;

class ProductImages extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'image'
    ];

    protected static function newFactory()
    {
        return ProductImagesFactory::new();
    }
}
