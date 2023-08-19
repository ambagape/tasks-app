import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface Task{
  id: string;
  name: string;
  description: string;
  status: string;
  order: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Array<Task>{
    return this.http.get(environment.baseUrl+'/api/tasks').toPromise();
  }

  createTask(data: Task){
    return this.http.post(environment.baseUrl+'/api/tasks', data).toPromise();
  }

  deleteTask(){

  }

  updateTask(){

  }
}
