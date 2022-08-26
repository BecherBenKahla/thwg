import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtractProgramsComponent } from './extract-programs.component';
import { ExtractProgramsRoutingModule } from './extract-programs-routing.module';



@NgModule({
  declarations: [
    ExtractProgramsComponent
  ],
  imports: [
    CommonModule,
    ExtractProgramsRoutingModule
  ]
})
export class ExtractProgramsModule { }
