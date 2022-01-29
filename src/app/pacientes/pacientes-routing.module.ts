import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';

const routes: Routes = [
  {path: 'pacientes', component: LayoutComponent,
  canActivate: [AuthGuard], children:[
    { path: 'form' , component: PacientesFormComponent },
    { path: 'form/:id' , component: PacientesFormComponent },
    { path: 'lista' , component: PacientesListComponent },
    { path: '' , redirectTo: '/pacientes/lista', pathMatch: 'full' }

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
