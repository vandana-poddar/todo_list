import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

import { Todo } from '../todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title!: string;
  @Output() toADD: EventEmitter<Todo> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
    const todo=
      {
        title:this.title
      }
      this.toADD.emit(todo)
  }

}
