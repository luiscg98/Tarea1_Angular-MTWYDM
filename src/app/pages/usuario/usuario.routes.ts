import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UsuarioComponent } from './usuario.component';
import { ConfigurarComponent } from './configurar/configurar.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
        { path: 'config', component: ConfigurarComponent },
        { path: 'perfil', component: PerfilComponent },
  ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRouterModule { }
