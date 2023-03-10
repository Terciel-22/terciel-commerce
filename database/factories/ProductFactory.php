<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        $categories = Category::pluck('id')->toArray();

        return [
            'title' => $this->faker->word(),
            'description' => $this->faker->text($nbMaxChars = 50),
            'price' => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 50, $max = 300),
            'discount_percentage' => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 50),
            'rating' => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 5),
            'stock' => $this->faker->numberBetween($min = 1, $max = 100),
            'brand' => $this->faker->word(),
            'category_id' => $this->faker->randomElement($categories),
            'image' => $this->faker->imageUrl($width = 640, $height = 480)
        ];
    }
}
