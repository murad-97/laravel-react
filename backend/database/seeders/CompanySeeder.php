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
        ]);
        Company::create([

            'name' => 'Company B',
                'email' => 'companyb@example.com',
                'password' => '123456789',
                'description' => 'Description of Company B',
                'website' => 'https://www.google.com',
                'phone_number' => '987-654-3210',
                'location_map' => 'Map URL for Company B',
                'industry_id' => 2
        ]);
    }
}
