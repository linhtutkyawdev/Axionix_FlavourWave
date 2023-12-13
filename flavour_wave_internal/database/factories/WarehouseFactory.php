<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Warehouse;
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
    protected $model = Warehouse::class;

    public function definition(): array
    {
        return [
            'product_id' => Product::factory(),
            'opening_balance'=>$this->faker->randomNumber(),
            'sales_issue' =>$this->faker->randomNumber(),
            'received' =>$this->faker->randomNumber(),
            'sales_return' =>$this->faker->randomNumber(),
            'damage' =>$this->faker->randomNumber(),
            'closing_balance' =>$this->faker->randomNumber(),
            'availability' => $this->faker->randomNumber()
        ];
    }
}
