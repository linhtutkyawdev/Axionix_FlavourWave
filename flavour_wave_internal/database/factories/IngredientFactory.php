<?php

namespace Database\Factories;

use App\Models\Ingredient;
use App\Models\Receipe;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ingredient>
 */
class IngredientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model = Ingredient::class;

    public function definition(): array
    {
        return [
            'name' => fake()->name()
        ];
    }
}
