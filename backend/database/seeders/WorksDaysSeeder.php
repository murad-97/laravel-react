<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\WorksDays;

class WorksDaysSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        WorksDays::create([
            'Company_id' => 1,
            'Sunday' => 1,
            'Monday' => 1,
            'Tuesday' => 1,
            'Wednesday' => 1,
            'Thursday' => 1,
            'Friday' => 0,
            'Saturday' => 0,
            'From' => "9:00",
            'To' => "6:30",
        ]);
        WorksDays::create([
            'Company_id' => 2,
            'Sunday' => 1,
            'Monday' => 1,
            'Tuesday' => 1,
            'Wednesday' => 1,
            'Thursday' => 1,
            'Friday' => 0,
            'Saturday' => 0,
            'From' => "9:00",
            'To' => "8:30",
        ]);
    }
}
