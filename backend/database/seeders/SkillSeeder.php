<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Skill::create([
            'job_id' => 1,
            'skill_name' => 'Programming',
        ]);
        Skill::create([
            'job_id' => 2,
            'skill_name' => 'Database Management',
        ]);
    }
}
