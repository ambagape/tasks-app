import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(){
    this.http.get('localhost:8000/api/tasks');
  }

  createTask(){

  }

  deleteTask(){

  }

  updateTask(){

  }
}
