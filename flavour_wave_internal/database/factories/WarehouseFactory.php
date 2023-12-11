<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Warehouse>
 */
class WarehouseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => Product::factory(),
            'opening_balance'=>fake()->sentence(),
            'sales_issue' =>fake()->sentence(),
            'received' =>fake()->sentence(),
            'sales_return' =>fake()->sentence(),
            'damage' =>fake()->sentence(),
            'closing_balance' =>fake()->sentence()
        ];
    }
}
