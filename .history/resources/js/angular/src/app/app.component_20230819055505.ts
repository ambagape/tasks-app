import { Component, OnInit } from '@angular/core';
import {Task, TaskService } from './task.service';
import { Project } from './project.service';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public tasks: Array<Task> = [];
  public projects: Array<Project> = [];
  public selectedProject: Project = null;

  constructor(private taskService:  TaskService, private projectService:  ProjectService, ){}

  async ngOnInit(): Promise<void> {
    this.tasks = (await this.taskService.getTasks()).data;
    this.projects = (await this.projectService.getProjects()).data;
  }

  async selectProject(id: number){
    this.selectedProject = (await this.projectService.getProject(id)).data;
  }

}
