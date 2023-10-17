<?php

namespace Database\Seeders;

use App\Models\Responsible;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ResponsibleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Responsible::create([
            'job_id' => 1,
            'responsibilitie_name' => 'Manage project timelines',
        ]);
        Responsible::create([
            'job_id' => 2,
            'responsibilitie_name' => 'Coordinate team meetings',
        ]);
    }
}
