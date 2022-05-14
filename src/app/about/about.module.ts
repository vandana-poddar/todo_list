import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioComponent } from './bio/bio.component';



@NgModule({
  declarations: [
    BioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BioComponent
  ]
})
export class AboutModule { }
