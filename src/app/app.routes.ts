import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TablerosComponent } from './pages/tableros/tableros.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: TablerosComponent},
    { path: 'login', component: LoginComponent},
    { path: 'usuario', loadChildren: () => import('./pages/usuario/usuario.module').then(module => module.UsuarioModule) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRouterModule { }
