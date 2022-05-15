import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  ishidden = false;
  getval(txt :any){
    console.log(txt)

    // this.cuurentvAL = txt;
  }
}
