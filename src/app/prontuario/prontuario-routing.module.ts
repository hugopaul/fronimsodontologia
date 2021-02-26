import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProntuarioFormComponent } from './prontuario-form/prontuario-form.component';
import { ProntuarioListComponent } from  './prontuario-list/prontuario-list.component';

const routes: Routes = [
  { path: 'prontuario-form', component: ProntuarioFormComponent },
  { path: 'prontuario-form/:id', component: ProntuarioFormComponent },
  { path: 'prontuario-list', component: ProntuarioListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProntuarioRoutingModule { }
