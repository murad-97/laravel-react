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
            'address'=>'Amman',
            // 'website'=>'www.CompanyA.com',
            'email' => 'companya@example.com',
            'password' => '123456789',
            'description' => 'Description of Company A',
            'website' => 'https://www.google.com',
            'phone_number' => '123-456-7890',
            'location_map' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867750.3173800122!2d36.50808486756517!3d31.83453195876325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2z2LnZhdmR2KfZhg!5e0!3m2!1sar!2sjo!4v1697672475989!5m2!1sar!2sjo',
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
            'address'=>'Amman',

                'email' => 'companyb@example.com',
                'password' => '123456789',
                'description' => 'Description of Company B',
                'website' => 'https://www.google.com',
                'phone_number' => '987-654-3210',
                'location_map' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867750.3173800122!2d36.50808486756517!3d31.83453195876325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2z2LnZhdmR2KfZhg!5e0!3m2!1sar!2sjo!4v1697672475989!5m2!1sar!2sjo',
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
