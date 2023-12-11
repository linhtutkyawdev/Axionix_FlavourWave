<?php

namespace Database\Factories;

use App\Models\Driver;
use App\Models\Preorder;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Logistic>
 */
class LogisticFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'preorder_id' => Preorder::factory(),
            'quantity' => fake()->sentence(),
            'driver_id' => Driver::factory()
        ];
    }
}
