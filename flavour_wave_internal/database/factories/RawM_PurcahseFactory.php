<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class RawM_PurcahseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'source' => fake()->sentence(),
            'amount' => fake()->sentence(),
            'unit_price' => fake()->sentence(),
            'purchased_date' => fake()->sentence()
        ];
    }
}
