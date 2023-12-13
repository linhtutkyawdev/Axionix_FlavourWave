<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $array = [
            array('Burmese Bliss', 'Indulge in the exquisite blend of Burmese Bliss Tea, a harmonious infusion of premium Burmese tea leaves, expertly crafted for a rich, aromatic experience. Delight your senses with the enchanting flavors and lingering warmth of this captivating brew.', 2000, 15, '1.jpg'),
            array('Golden Sunshine Tea',
                'Indulge in the radiant warmth of Golden Sunshine Tea, a blissful blend that captivates with its rich, golden hue and exquisite taste. Immerse yourself in the soothing embrace of sun-kissed tea leaves, delivering a revitalizing experience that uplifts your senses with every sip. Embrace the golden moments of tranquility in a cup.'
                , 3300, 20, '2.jpg'),
            array('Mango Tango Delight',
                'Indulge in the tropical symphony of Mango Tango Delight Tea. Our exquisite blend combines the succulence of ripe mangoes with a hint of tangy citrus, creating a luscious, refreshing dance of flavors in every sip. Elevate your tea experience with this vibrant infusion that promises to tantalize your taste buds and transport you to a paradise of fruity delight.'
                , 4000, 25, '3.jpg'),
            array('Rangoon Rosewater Elixir',
                'Indulge in the exquisite harmony of Rangoon Rosewater Elixir Tea. Crafted with precision, this tea captivates with the delicate essence of roses, creating a luxurious and aromatic infusion that transcends ordinary tea experiences. Elevate your moments with this enchanting blend.'
                , 2500, 18, '4.jpg'),
            array('Emerald Green Chai',
                'Indulge in the rich, invigorating blend of our Emerald Green Chai Tea. Immerse your senses in a symphony of bold emerald hues and aromatic spices, as each sip unveils a harmonious fusion of premium green tea leaves and authentic chai spices. Elevate your tea experience with this enchanting infusion, a celebration of tradition and taste.'
                , 3000, 22, '5.jpg'),
            array('Citrus Fusion Fizz',
                'Experience a burst of citrus delight with our Citrus Fusion Fizz Tea! This invigorating blend combines zesty citrus notes with a sparkling effervescence, creating a refreshing and uplifting tea sensation. Sip into a world of vibrant flavors and rejuvenate your senses with every effervescent sip.'
                , 2000, 12, '6.jpg'),
            array('Coconut Cream Dream',
                'Indulge in the velvety allure of Coconut Cream Dream Tea. Immerse your senses in a tropical symphony of rich coconut and delicate tea, creating a luscious, creamy escape that transcends ordinary sipping experiences. Elevate your tea ritual with this heavenly blend.'
                , 5000, 28, '7.jpg'),
            array('Jasmine Serenade Soda', 'Indulge in the enchanting allure of Jasmine Serenade Soda Tea—a harmonious blend of fragrant jasmine blossoms and effervescent bubbles. Immerse your senses in this exquisite fusion, where floral notes dance with a refreshing twist. Elevate your tea experience with a symphony of flavor in every sip.'
                , 2700, 15, '8.jpg'),
            array('Papaya Paradise Punch',
                'Indulge in the tropical bliss of Papaya Paradise Punch Tea. A symphony of exotic papaya, luscious fruits, and premium tea leaves, creating a refreshing infusion that transports you to a paradise of flavor with every sip. Elevate your tea experience with this vibrant and rejuvenating blend.'
                , 3000, 20, '9.jpg'),
            array('Lychee Lullaby',
                'Indulge in the enchanting harmony of our Lychee Lullaby Tea, a soothing blend that marries the sweet essence of ripe lychee with delicate floral notes. Crafted to transport you to a tranquil oasis, this caffeine-free infusion is a melody of relaxation, perfect for unwinding after a long day. Let each sip serenade your senses and embrace a moment of blissful calm.', 3000, 25, '10.jpg'),
            array('Tropical Twilight Nectar',
                'Indulge in the enchanting allure of Tropical Twilight Nectar Tea, a harmonious blend of exotic fruits and fragrant blooms. Immerse yourself in the rich, soothing taste that transports you to a tranquil paradise with every sip. Elevate your tea experience with this luscious infusion of tropical delights.', 2400, 18, '11.jpg'),
            array('Orchid Oasis Euphoria',
                'Indulge in the ethereal blend of Orchid Oasis Euphoria Tea, a harmonious infusion of rare orchid petals and exquisite tea leaves. Unveil a serene escape with every sip, as delicate floral notes dance on your palate, creating a truly enchanting tea experience.', 3000, 22, '12.jpg'),
            array('Starfruit Sparkling Sorbet',
                'Indulge in the refreshing symphony of exotic starfruit notes harmoniously blended with effervescent sparkle, creating a tantalizing sorbet tea experience.'
                , 2600, 12, '13.jpg'),
            array('Ginger Zing Zest',
                'Indulge in the invigorating warmth of our Ginger Zing Zest Tea, a harmonious blend of spicy ginger, lively citrus, and soothing herbs. Elevate your senses with each cup, as this aromatic infusion delivers a refreshing burst of flavor that revitalizes and rejuvenates. Embark on a journey of wellness with the perfect balance of zest and tranquility in every sip.', 1400, 28, '14.jpg'),
            array('Lush Lemongrass Infusion', 'Indulge in the refreshing zest of our Lush Lemongrass Infusion Tea. A vibrant blend of premium lemongrass leaves, delivering a citrusy symphony that invigorates your senses. Sip into serenity with each cup, a perfect harmony of flavor and relaxation.', 2400, 15, '15.jpg'),
            array('Ruby Red Guava Gusto',
                'Indulge in the exotic allure of our Ruby Red Guava Gusto Tea. Immerse your senses in the vibrant blend of sun-ripened guava and invigorating ruby red tea, creating a harmonious symphony of tropical flavors that will transport you to paradise with every sip. Refreshingly bold, this tea is a tantalizing escape into a world of pure, natural delight.', 7000, 20, '16.jpg'),
            array('Blueberry Burst Breeze',
                'Indulge in the refreshing symphony of flavors with our Blueberry Burst Breeze Tea. Immerse your senses in a vibrant blend of plump blueberries and delicate tea leaves, creating a tantalizing fusion of sweetness and freshness. Elevate your tea experience with every sip of this invigorating and antioxidant-rich infusion.', 3600, 25, '17.jpg'),
            array('Pineapple Pizzazz Quencher',
                'Indulge in the tropical symphony of our Pineapple Pizzazz Quencher Tea. A tantalizing blend of luscious pineapple and premium tea leaves, this refreshing beverage promises a burst of exotic flavors in every sip. Elevate your tea experience with the perfect balance of sweetness and zest, creating a tropical oasis in every cup.', 3000, 18, '18.jpg'),
            array('Passionfruit Pomegranate Bliss',
                'Indulge in the tantalizing fusion of exotic passionfruit and vibrant pomegranate with our Bliss Tea. This enchanting blend promises a symphony of flavors, delivering a refreshing and invigorating experience with every sip. Immerse yourself in the rich, fruity essence of this delightful tea, crafted to elevate your tea-drinking moments to pure bliss.', 4700, 22, '19.jpg'),
            array('Exotic Cucumber Limeade', 'Indulge in the refreshing allure of our Exotic Cucumber Limeade Tea, a tantalizing blend of crisp cucumber, zesty lime, and premium tea leaves. Savor the invigorating fusion of flavors in every sip, delivering a uniquely delightful tea experience.', 2900, 12, '20.jpg'),
        ];

        foreach ($array as $item) {
            DB::table('products')->insert([
                'name' => $item[0],
                'description' => $item[1],
                'unit_price' => $item[2],
                'quantity_per_box' => $item[3],
                'image_url' => "storage/product-images/" . $item[4],
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }

    }
}
