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

  getTasks(): Promise<Array<Task>>{
    return this.http.get<Array<Task>>(`${environment.baseUrl}/api/tasks`).toPromise();
  }

  createTask(data: Task){
    return this.http.post(`${environment.baseUrl}/api/tasks`, data).toPromise();
  }

  updateTask(data: Task){
    return this.http.put(`${environment.baseUrl}/api/tasks`, data).toPromise();
  }

  deleteTask(id: number){
    return this.http.delete<Array<Task>>(`${environment.baseUrl}/api/tasks/${id}`).toPromise();
  }
}
