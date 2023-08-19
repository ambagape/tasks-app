import { Component, OnInit } from '@angular/core';
import {Task, TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public tasks: Array<Task> = [];
  constructor(private taskService:  TaskService){}

  async ngOnInit(): Promise<void> {
    this.tasks = await this.taskService.getTasks();
  }



}
