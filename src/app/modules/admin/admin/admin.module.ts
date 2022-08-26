import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ExtractProgramsModule } from './extract-programs/extract-programs.module';
import { ManageProgramsModule } from './manage-programs/manage-programs.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ExtractProgramsModule,
    ManageProgramsModule
  ]
})
export class AdminModule { }
