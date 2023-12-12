<?php

namespace Database\Factories;

use App\Models\Ingredient;
use App\Models\Receipe;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Receipe>
 */
class ReceipeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Receipe::class;

    public function definition(): array
    {
        return [
            'ingredient_id' => Ingredient::factory(),
            'amount_grams' => $this->faker->randomNumber()
        ];
    }
}
