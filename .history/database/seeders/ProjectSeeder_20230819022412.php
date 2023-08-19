<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::factory()->count(3)->create();
    }
}
