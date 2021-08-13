import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../home/home.component';
import { TodoDataService } from '../service/data/todo-data.service';
@Component({
  selector: 'app-updatetodo',
  templateUrl: './updatetodo.component.html',
  styleUrls: ['./updatetodo.component.css']
})
export class UpdatetodoComponent implements OnInit {

  id:number   
  todo: Todo

  constructor(
    private todoService : TodoDataService,
    private route : ActivatedRoute,
    private router: Router
  ) { }

 

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,"","",true);
    if(this.id != -1){
      this.todoService.fetchTodoById(this.id).subscribe(
        response => {this.todo = response,
        console.log(response)}
      );
        }
  }

  saveTodo(){
    if(this.id === -1){
          //creayte todo
      } else{
        this.id = this.route.snapshot.params['id'];
        this.todoService.updateTodoById(this.id, this.todo).subscribe(
            response => {console.log(response);
              this.router.navigate(["home"])
            }
        )
          }
      
  }


   createTodo(){
     return this.todoService.addTodo(this.todo).subscribe(
       response => {console.log(response);
          this.router.navigate(["home"]);}
     );
   }
}
