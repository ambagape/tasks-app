<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::all();
        ProjectResource::collection($projects);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $validated = $request->validated();
        $task = Project::create([
            'name' => $validated['name'],
            'description' => $validated['description'],
            'order' => $validated['order']
        ]);

        return ProjectResource::make($task);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $project->load(['tasks']);
        ProjectResource::make($project);
    }


}
