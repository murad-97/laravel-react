<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Company::create([

            'name' => 'Company A',
            'email' => 'companya@example.com',
            'password' => '123456789',
            'description' => 'Description of Company A',
            'website' => 'https://www.google.com',
            'phone_number' => '123-456-7890',
            'location_map' => 'Map URL for Company A',
            'industry_id' => 1,
            'img1' => "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimg-corp.com%2Fabout-us.php&psig=AOvVaw3NiFUU944YeApyhm34LkSo&ust=1697839458010000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKi76YCPg4IDFQAAAAAdAAAAABAI",
            'img2' => "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimg-corp.com%2Fabout-us.php&psig=AOvVaw3NiFUU944YeApyhm34LkSo&ust=1697839458010000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKi76YCPg4IDFQAAAAAdAAAAABAI",
            'img3' => "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimg-corp.com%2Fabout-us.php&psig=AOvVaw3NiFUU944YeApyhm34LkSo&ust=1697839458010000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKi76YCPg4IDFQAAAAAdAAAAABAI",
            'about' => "Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an",
            'startDate' => "2022-2-8"
        ]);
        Company::create([

            'name' => 'Company B',
                'email' => 'companyb@example.com',
                'password' => '123456789',
                'description' => 'Description of Company B',
                'website' => 'https://www.google.com',
                'phone_number' => '987-654-3210',
                'location_map' => 'Map URL for Company B',
                'industry_id' => 2,
            'img1' => "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimg-corp.com%2Fabout-us.php&psig=AOvVaw3NiFUU944YeApyhm34LkSo&ust=1697839458010000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKi76YCPg4IDFQAAAAAdAAAAABAI",
            'img2' => "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimg-corp.com%2Fabout-us.php&psig=AOvVaw3NiFUU944YeApyhm34LkSo&ust=1697839458010000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKi76YCPg4IDFQAAAAAdAAAAABAI",
            'img3' => "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimg-corp.com%2Fabout-us.php&psig=AOvVaw3NiFUU944YeApyhm34LkSo&ust=1697839458010000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKi76YCPg4IDFQAAAAAdAAAAABAI",
            'about' => "Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an",
                        'startDate' => "2020-10-5"

        ]);
    }
}
