<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskResource;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Task::all();
        return TaskResource::collection($tasks);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskResource $request)
    {
        $validated = $request->validated();
        $task = Task::create([
            'name' => $validated['name'],
            'description' => $validated['description'],
            'order' => $validated['order']
        ]);

        return TaskResource::make($task);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskResource $request, Task $task)
    {
        $validated = $request->validated();
        if(isset($validated['name'])){
            $task->name = $validated['name'];
        }
        if(isset($validated['description'])){
            $task->description = $validated['description'];
        }
        if(isset($validated['order'])){
            $task->order = $validated['order'];
        }
        if(isset($validated['status'])){
            $task->status = $validated['status'];
        }
        $task->save();

        return TaskResource::make($task);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json('', Response::HTTP_NO_CONTENT);
    }
}
