import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { AtestadoFormComponent } from './atestado-form/atestado-form.component'
import { AtestadoListComponent } from  './atestado-list/atestado-list.component'
import { ReceituarioFormComponent } from './receituario-form/receituario-form.component'
import { ReceituarioListComponent } from  './receituario-list/receituario-list.component'

const routes: Routes = [
  {path: 'receituario', component: LayoutComponent, canActivate: [AuthGuard], children:[
    { path: 'form' , component: ReceituarioFormComponent },
    { path: 'form/:id' , component: ReceituarioFormComponent },
    { path: 'lista' , component: ReceituarioListComponent },
    { path: '' , redirectTo: '/receituario/lista', pathMatch: 'full' }

  ]},
  {path: 'atestado', component: LayoutComponent, canActivate: [AuthGuard], children:[
    { path: 'form' , component: AtestadoFormComponent },
    { path: 'form/:id' , component: AtestadoFormComponent },
    { path: 'lista' , component: AtestadoListComponent },
    { path: '' , redirectTo: '/atestado/lista', pathMatch: 'full' }

  ]}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
