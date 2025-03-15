import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccesoGuard } from './acceso.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AccesoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./Maestros/usuario/usuario.module').then( m => m.UsuarioPageModule),
    canActivate: [AccesoGuard]
  },
  {
    path: 'editar-usuario',
    loadChildren: () => import('./Maestros/editar-usuario/editar-usuario.module').then( m => m.EditarUsuarioPageModule),
    canActivate: [AccesoGuard]
  },
  {
    path: 'datos-maestro',
    loadChildren: () => import('./datos-maestro/datos-maestro.module').then( m => m.DatosMaestroPageModule),
    canActivate: [AccesoGuard]
  },
  {
    path: 'cambio-clave',
    loadChildren: () => import('./cambio-clave/cambio-clave.module').then( m => m.CambioClavePageModule),
    canActivate: [AccesoGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
