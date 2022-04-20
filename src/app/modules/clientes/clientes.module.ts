import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FormClienteComponent } from './pages/form-cliente/form-cliente.component';


@NgModule({
  declarations: [
    ClienteComponent,
    FormClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
