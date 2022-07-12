import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from '@modules/usuarios/usuarios-routing.module';
import { UsuariosComponent } from '@modules/usuarios/pages/usuarios/usuarios.component';
import { UsuarioCreateComponent } from '@modules/usuarios/pages/usuario-create/usuario-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsuariosComponent, UsuarioCreateComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UsuariosModule {}
