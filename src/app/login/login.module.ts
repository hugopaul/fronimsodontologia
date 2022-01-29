import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    OrderModule
  ]
})
export class LoginModule { }
