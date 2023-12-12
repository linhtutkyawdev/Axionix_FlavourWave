<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DriverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $array = [
            array('Ko Aung Kyaw','2C/9800'),
            array('U Hla Maung','4E/2400'),
            array('Ko Myo Thant','5T/3100'),
            array('Ko Kyaw Zaw','3W/2000'),
            array('U Myint Aung','1Y/1100'),
        ];

        foreach($array as $item){
            DB::table('drivers')->insert([
                'name' => $item[0],
                'vehicle_number' => $item[1],
                'isFree' =>1,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
    }
}
