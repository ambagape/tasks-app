import { Component, OnInit } from '@angular/core';
import {Task, TaskService } from './task.service';
import { Project } from './project.service';
import { ProjectService } from './project.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public tasks: Array<Task> = [];
  public projects: Array<Project> = [];
  public selectedProject: Project | null = null;

  public taskForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      order: new FormControl('', Validators.required),
    }
  );

  constructor(private taskService:  TaskService, private projectService:  ProjectService, ){}

  async ngOnInit(): Promise<void> {
    this.tasks = (await this.taskService.getTasks()).data;
    this.projects = (await this.projectService.getProjects()).data;
  }

  async selectProject(event: any){
    const selectedValue = event.target.value;
    this.selectedProject = (await this.projectService.getProject(selectedValue)).data;
    this.tasks = this.selectedProject.tasks;
  }

  async delete(id: number){
    await this.taskService.deleteTask(id);
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  async createTask(){
    this.taskForm = this.taskForm.patchValue({
      project_id: this.selectedProject?.id
    });
    await this.taskService.createTask(this.taskForm.value);
    if(this.selectedProject){
      this.selectedProject = (await this.projectService.getProject(this.selectedProject?.id)).data;
      this.tasks = this.selectedProject.tasks;
    }

  }
}
