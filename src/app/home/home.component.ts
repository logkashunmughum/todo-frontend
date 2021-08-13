import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todo{
  constructor(
    public id : number,
    public title : string,
    public description : string,
    public done :boolean
    ){

  }
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = ''

  message: any  

  todos: Todo[];
  

  constructor(private route : ActivatedRoute,
    private todoService : TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.refreshTodos();
  }

  deleteTodo(id : number){
    console.log(`todo deleted ${id}`)
    this.todoService.deleteTodoById(id).subscribe(
      response =>{
        console.log(response)
        this.message = `Deleted ${id} Successfully`;
        this.refreshTodos();
      }
    );
    
  }

  refreshTodos(){
    this.todoService.fetchAllTodo().subscribe(
      response => {
        console.log(response)
        this.todos = response;
      }
    );
  }

  updateTodo(id : number){
      this.router.navigate(['update', id]);
  }

  addTodo(){
      this.router.navigate(['update', -1])
  }

 

}
