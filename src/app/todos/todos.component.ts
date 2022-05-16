import {
  Component,
  OnInit,
} from '@angular/core';

import { Todo } from '../todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];  
  constructor() {
    this.todos = 
     [
       {
       title:"meeting"
       },
       {
        title:"lunch"
        },
        {
          title:"class"
          }
      ]
    
   }

  ngOnInit(): void {
  }
  deletetodo(todo:Todo){
    const index = this.todos?.indexOf(todo);
    this.todos.splice(index,1);
  }
}
