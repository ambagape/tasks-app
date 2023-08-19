<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Task;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = Project::factory()->count(3)->create();
        foreach($projects as $project){
            $tasks = Task::factory()->count(5)->create();
            $project->save($tasks);
        }
    }
}
