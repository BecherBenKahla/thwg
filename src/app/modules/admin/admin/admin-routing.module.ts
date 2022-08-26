import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'extract-programs',
    loadChildren: () => import('app/modules/admin/admin/extract-programs/extract-programs.module').then(m => m.ExtractProgramsModule)
  },
  {
    path: 'manage-programs',
    loadChildren: () => import('app/modules/admin/admin/manage-programs/manage-programs.module').then(m => m.ManageProgramsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
