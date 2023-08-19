import { Component, OnInit } from '@angular/core';
import {Task, TaskService } from './task.service';
import { Project } from './project-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public tasks: Array<Task> = [];
  public projects: Array<Project> = [];

  constructor(private taskService:  TaskService, private projectService:  ProjectService, ){}

  async ngOnInit(): Promise<void> {
    this.tasks = (await this.taskService.getTasks()).data;
    console.log(this.tasks);
  }



}
