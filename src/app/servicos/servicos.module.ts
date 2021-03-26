import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ReceituarioFormComponent } from './receituario-form/receituario-form.component';
import { ReceituarioListComponent } from './receituario-list/receituario-list.component';
import { AtestadoFormComponent } from './atestado-form/atestado-form.component';
import { AtestadoListComponent } from './atestado-list/atestado-list.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ReceituarioFormComponent, ReceituarioListComponent, AtestadoFormComponent, AtestadoListComponent],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    FormsModule,
    OrderModule,
    RouterModule,
    HttpClientModule
  ], exports: [
      AtestadoFormComponent,
      AtestadoListComponent,
      ReceituarioFormComponent,
      ReceituarioListComponent
  ]
})
export class ServicosModule { }
