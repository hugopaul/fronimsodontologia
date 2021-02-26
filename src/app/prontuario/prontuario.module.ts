import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProntuarioRoutingModule } from './prontuario-routing.module';
import { ProntuarioFormComponent } from './prontuario-form/prontuario-form.component';
import { ProntuarioListComponent } from './prontuario-list/prontuario-list.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProntuarioFormComponent, ProntuarioListComponent ],
  imports: [
    CommonModule,
    ProntuarioRoutingModule,
    FormsModule,
    OrderModule,
    HttpClientModule,
    RouterModule
  ], exports: [
      ProntuarioFormComponent,
      ProntuarioListComponent
  ]
})
export class ProntuarioModule { }
