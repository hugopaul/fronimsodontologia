import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { FinancieroFormComponent } from './financiero-form/financiero-form.component'
import { FinancieroListComponent } from  './financiero-list/financiero-list.component'

const routes: Routes = [
  {path: 'financeiro', component: LayoutComponent,
  canActivate: [AuthGuard],  children:[
    { path: 'form' , component: FinancieroFormComponent },
    { path: 'form/:id' , component: FinancieroFormComponent },
    { path: 'lista' , component: FinancieroListComponent },
    { path: '' , redirectTo: '/financeiro/lista', pathMatch: 'full' }

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceiroRoutingModule { }
