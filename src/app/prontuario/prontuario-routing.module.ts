import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ProntuarioFormComponent } from './prontuario-form/prontuario-form.component';
import { ProntuarioListComponent } from  './prontuario-list/prontuario-list.component';

const routes: Routes = [
  {path: 'prontuario', component: LayoutComponent,canActivate: [AuthGuard], children:[
    { path: 'form' , component: ProntuarioFormComponent },
    { path: 'form/:id' , component: ProntuarioFormComponent },
    { path: 'lista' , component: ProntuarioListComponent },
    { path: '' , redirectTo: '/prontuario/lista', pathMatch: 'full' }

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProntuarioRoutingModule { }
