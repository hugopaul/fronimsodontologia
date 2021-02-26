import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancieroFormComponent } from './financiero-form/financiero-form.component'
import { FinancieroListComponent } from  './financiero-list/financiero-list.component'

const routes: Routes = [
  { path: 'financeiro-form', component: FinancieroFormComponent },
  { path: 'financeiro-list', component: FinancieroListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceiroRoutingModule { }
