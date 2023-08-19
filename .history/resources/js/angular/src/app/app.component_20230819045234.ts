import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private tasks = [];
  constructor(private taskService:  TaskService){}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }



}
