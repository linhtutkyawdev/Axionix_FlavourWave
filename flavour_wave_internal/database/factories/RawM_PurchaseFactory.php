<?php

namespace Database\Factories;

use App\Models\RawM_Purchase;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class RawM_PurchaseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = RawM_Purchase::class;

    public function definition(): array
    {
        return [
            'source' => fake()->name(),
            'amount' => $this->faker->randomNumber(),
            'unit_price' => $this->faker->randomNumber(),
            'purchased_date' => fake()->date()
        ];
    }
}
