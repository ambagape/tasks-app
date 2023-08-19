import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface Task{

}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(){
    return this.http.get(environment.baseUrl+'/api/tasks').toPromise();
  }

  createTask(data){
    return this.http.post(environment.baseUrl+'/api/tasks', data).toPromise();
  }

  deleteTask(){

  }

  updateTask(){

  }
}