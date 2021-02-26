import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { FinancieroFormComponent } from './financiero-form/financiero-form.component';
import { FinancieroListComponent } from './financiero-list/financiero-list.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [FinancieroFormComponent, FinancieroListComponent],
  imports: [
    CommonModule,
    FinanceiroRoutingModule,
    FormsModule,
    OrderModule
  ], exports: [
      FinancieroFormComponent,
      FinancieroListComponent
  ]
})
export class FinanceiroModule { }
