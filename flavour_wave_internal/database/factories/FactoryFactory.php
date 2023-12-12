<?php

namespace Database\Factories;

use App\Models\Factory as ModelsFactory;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class FactoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = ModelsFactory::class;

    public function definition(): array
    {
        return [
            'product_id' => Product::factory(),
            'expected' => 1,
            'actual' => 2
        ];
    }
}
