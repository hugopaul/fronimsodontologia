import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { FinancieroFormComponent } from './financiero-form/financiero-form.component';
import { FinancieroListComponent } from './financiero-list/financiero-list.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { RouterModule } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [FinancieroFormComponent, FinancieroListComponent],
  imports: [
    NgxMaskModule.forRoot( maskConfig ),
    CommonModule,
    RouterModule,
    FinanceiroRoutingModule,
    FormsModule,
    OrderModule
  ], exports: [
      FinancieroFormComponent,
      FinancieroListComponent
  ]
})
export class FinanceiroModule { }
