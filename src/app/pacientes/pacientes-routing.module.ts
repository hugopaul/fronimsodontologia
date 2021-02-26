import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';

const routes: Routes = [

  { path: 'pacientes-form', component: PacientesFormComponent},
  { path: 'pacientes-list', component: PacientesListComponent},
  { path: 'pacientes-form/:id', component: PacientesFormComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
