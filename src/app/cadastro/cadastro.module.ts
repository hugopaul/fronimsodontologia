import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { CadastroListComponent } from './cadastro-list/cadastro-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [CadastroFormComponent, CadastroListComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    RouterModule,
    FormsModule,
    OrderModule
  ]
})
export class CadastroModule { }
