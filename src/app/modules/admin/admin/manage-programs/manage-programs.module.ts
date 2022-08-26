import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProgramsComponent } from './manage-programs.component';
import { ManageProgramsRoutingModule } from './manage-programs-routing.module';



@NgModule({
  declarations: [
    ManageProgramsComponent
  ],
  imports: [
    CommonModule,
    ManageProgramsRoutingModule
  ]
})
export class ManageProgramsModule { }
