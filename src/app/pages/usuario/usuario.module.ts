import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurarComponent } from './configurar/configurar.component';
import { UsuarioRouterModule } from './usuario.routes';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [ConfigurarComponent, PerfilComponent],
  imports: [
    CommonModule,
    UsuarioRouterModule
  ]
})
export class UsuarioModule { }
