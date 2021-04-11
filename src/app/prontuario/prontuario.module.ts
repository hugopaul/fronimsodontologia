import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProntuarioRoutingModule } from './prontuario-routing.module';
import { ProntuarioFormComponent } from './prontuario-form/prontuario-form.component';
import { ProntuarioListComponent } from './prontuario-list/prontuario-list.component';
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
  declarations: [ProntuarioFormComponent, ProntuarioListComponent ],
  imports: [
    NgxMaskModule.forRoot( maskConfig ),
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
