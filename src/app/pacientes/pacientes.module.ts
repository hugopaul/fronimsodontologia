import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [PacientesFormComponent, PacientesListComponent],
  imports: [
    NgxMaskModule.forRoot( maskConfig ),
    CommonModule,
    PacientesRoutingModule,
    FormsModule,
    OrderModule,
    HttpClientModule,
    RouterModule
  ], exports: [
      PacientesFormComponent,
      PacientesListComponent
  ]
})
export class PacientesModule { }
