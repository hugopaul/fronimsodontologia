import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { CadastroListComponent } from './cadastro-list/cadastro-list.component';

const routes: Routes = [
  {path: 'cadastro', component: LayoutComponent, 
    canActivate: [AuthGuard],  children:[
    { path: 'form' , component: CadastroFormComponent },
    { path: 'form/:id' , component: CadastroFormComponent },
    { path: 'lista' , component: CadastroListComponent },
    { path: '' , redirectTo: '/cadastro/lista', pathMatch: 'full' }

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
