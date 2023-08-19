<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::resource('tasks', TaskController::class)->except([
    'show'
]);

Route::post('projects', [ProjectController::class, ]);

Route::resource('projects', ProjectController::class)->except([
    'update','destroy'
]);

