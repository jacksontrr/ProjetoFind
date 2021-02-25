import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicial',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./pages/inicial/inicial.module').then( m => m.InicialPageModule)
  },
  {
    path: 'cadastrar-prof',
    loadChildren: () => import('./pages/cadastrar-prof/cadastrar-prof.module').then( m => m.CadastrarProfPageModule)
  },
  {
    path: 'cadastrar-cli',
    loadChildren: () => import('./pages/cadastrar-cli/cadastrar-cli.module').then( m => m.CadastrarCliPageModule)
  },
  {
    path: 'login-prof',
    loadChildren: () => import('./pages/login-prof/login-prof.module').then( m => m.LoginProfPageModule)
  },
  {
    path: 'login-cli',
    loadChildren: () => import('./pages/login-cli/login-cli.module').then( m => m.LoginCliPageModule)
  },
  {
    path: 'formulario-prof',
    loadChildren: () => import('./pages/formulario-prof/formulario-prof.module').then( m => m.FormularioProfPageModule)
  },
  {
    path: 'formulario-cli',
    loadChildren: () => import('./pages/formulario-cli/formulario-cli.module').then( m => m.FormularioCliPageModule)
  },
  {
    path: 'home-prof',
    loadChildren: () => import('./pages/home-prof/home-prof.module').then( m => m.HomeProfPageModule)
  },
  {
    path: 'home-cli',
    loadChildren: () => import('./pages/home-cli/home-cli.module').then( m => m.HomeCliPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
