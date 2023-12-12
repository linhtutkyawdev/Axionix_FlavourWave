<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\Preorder;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Preorder>
 */
class PreorderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model = Preorder::class;

    public function definition(): array
    {
        return [
            'customer_id' => Customer::factory(),
            'order_id' => $this->faker->randomNumber(5,true),
            'location' => fake()->sentence(),
            'delivered_quantity' => 20
        ];
    }
}
