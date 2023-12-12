<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $array = [
            array('Black tea leaves','CityMark',40,2000),
            array('Lemongrass','CityMark',10,2000),
            array('Ginger','CityMark',10,2000),
            array('Honey','CityMark',10,2000),
            array('Turmeric','CityMark',10,2000),
            array('Lemon peel','CityMark',20,2000),
            array('Chamomile','CityMark',20,3000),
            array('Mango puree','CityMark',20,3000),
            array('Orange zest','CityMark',20,3000),
            array('Vanilla','CityMark',20,3000),
            array('Rose petals','CityMark',20,3000),
            array('Hibiscus','CityMark',20,3000),
            array('Elderflower','OceanCity',20,3000),
            array('Rhubard','OceanCity',20,3000),
            array('Cardamom','OceanCity',20,3000),
            array('Cinnamon','OceanCity',20,3000),
            array('Cloves','OceanCity',20,2000),
            array('Orange juice','OceanCity',20,2000),
            array('Lime juice','OceanCity',10,2000),
            array('Lemon zest','OceanCity',10,2000),
            array('Sparkling zest','OceanCity',10,2000),
            array('Coconut milk','CityMark',10,2500),
            array('Cream','CityMark',10,2500),
            array('Jasmine tea leaves','CityMark',10,2500),
            array('Soda flower','CityMark',10,2500),
            array('Sugar','CityMark',10,2500),
            array('Papaya puree','CityMark',10,2500),
            array('Guava juice','CityMark',10,2500),
            array('Passionfruit','CityMark',10,2500),
            array('Lychee puree','CityMark',30,2500),
            array('rosewater','CityMark',30,2500),
            array('Orchid petals','Juction Malls',30,2000),
            array('Lavender','Juction Malls',30,2000),
            array('Blueberry','Juction Malls',30,2000),
            array('Starfruit juice','Juction Malls',30,2000),
            array('Ginger root','Juction Malls',30,3050),
            array('Lemon juice','Juction Malls',30,3050),
            array('Lemongrass tea leaves','Juction Malls',30,3050),
            array('Agave syrup','Juction Malls',30,3050),
            array('Guava puree','Juction Malls',10,3050),
            array('Grapefruit juice','Juction Malls',10,3050),
            array('Blueberry puree','Juction Malls',10,3050),
            array('Blueberry tea leaves','Juction Malls',10,3050),
            array('Mint','Juction Malls',40,3050),
            array('Soda water','Juction Malls',40,4000),
            array('Pineapple juice','Juction Malls',40,4000),
            array('Coconut water','Juction Malls',40,4000),
            array('Passionfruit puree','Juction Malls',40,4000),
            array('Pmegranate juice','Juction Malls',40,4000),
            array('Cucumber juice','CityMark',40,4000),
            array('lime','CityMark',40,4000),
        ];

        foreach($array as $item){
            DB::table('ingredients')->insert([
                'name' => $item[0],
                'source' => $item[1],
                'amount' => $item[2],
                'unit_price'=>$item[3],
                'purchased_date'=> now(),
                'created_at'=>now(),          
                'updated_at'=>now()          
            ]);
        }
    }
}
