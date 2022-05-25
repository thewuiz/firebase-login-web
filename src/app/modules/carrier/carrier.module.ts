import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrierRoutingModule } from './carrier-routing.module';
import { CarrierComponent } from './pages/carrier/carrier.component';
import { FormCarrierComponent } from './pages/form-carrier/form-carrier.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarrierComponent, FormCarrierComponent],
  imports: [
    RouterModule,
    CommonModule,
    CarrierRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CarrierModule {}
