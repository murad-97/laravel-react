<?php

namespace Database\Seeders;

use App\Models\Qualification;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QualificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Qualification::create([
            'job_id' => 1,
            'qualification_name' => 'Bachelor of Science in Computer Science',
        ]);
        Qualification::create([
            'job_id' => 1,
            'qualification_name' => 'Master of Business Administration',
        ]);
    }
}
