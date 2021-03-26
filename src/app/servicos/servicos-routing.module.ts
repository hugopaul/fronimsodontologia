import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtestadoFormComponent } from './atestado-form/atestado-form.component'
import { AtestadoListComponent } from  './atestado-list/atestado-list.component'
import { ReceituarioFormComponent } from './receituario-form/receituario-form.component'
import { ReceituarioListComponent } from  './receituario-list/receituario-list.component'


const routes: Routes = [
  { path: 'receituario-form', component: ReceituarioFormComponent },
  { path: 'receituario-form/:id', component: ReceituarioFormComponent },
  { path: 'receituario-list', component: ReceituarioListComponent },
  { path: 'atestado-form', component: AtestadoFormComponent },
  { path: 'atestado-form/:id', component: AtestadoFormComponent },
  { path: 'atestado-list', component: AtestadoListComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
