import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/home/home.component';




@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http : HttpClient
  ) { }

  fetchAllTodo(){
      return this.http.get<Todo[]>('http://localhost:8080/todo/getTodo')
         
      }

  deleteTodoById(id){
    return this.http.delete(`http://localhost:8080/todo/removeTodo/${id}`, {responseType: 'text'});
  }

  fetchTodoById(id){
    return this.http.get<Todo>(`http://localhost:8080/todo/getTodoById/${id}`);
  }
 
  updateTodoById(id, todo){
    return this.http.put(`http://localhost:8080/todo/updateTodo/${id}`, todo, {responseType: 'text'});
  }

  addTodo(todo){
    return this.http.post(`http://localhost:8080/todo/saveTodo`, todo, {responseType: 'text'});
  }

  

      
  }

