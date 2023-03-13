<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'cart_token',
        'total_quantity',
        'total_price',
    ];

    public function cartItems()
    {
        return $this->hasMany(CartItems::class);
    }
}
