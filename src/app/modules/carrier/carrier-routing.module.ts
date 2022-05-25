import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrierComponent } from './pages/carrier/carrier.component';
import { FormCarrierComponent } from './pages/form-carrier/form-carrier.component';

const routes: Routes = [
  {
    path: '',
    component: CarrierComponent,
  },
  { path: 'form', component: FormCarrierComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrierRoutingModule {}
