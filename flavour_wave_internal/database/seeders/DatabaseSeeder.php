<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Customer;
use App\Models\Factory;
use App\Models\Logistic;
use App\Models\Receipe;
use App\Models\Warehouse;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        $this->call([
            ProductSeeder::class,
            IngredientSeeder::class,
            DriverSeeder::class
        ]);
        Customer::factory(5)
                ->hasPreOrders(3)
                ->create();
        Factory::factory(5)->create();
        Logistic::factory(5)->create();
        Receipe::factory(5)->create();
        Warehouse::factory(5)->create();
    }
}
