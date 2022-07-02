import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'formacion',
    loadChildren: () => import('./formacion/formacion.module').then( m => m.FormacionPageModule)
  },
  {
    path: 'experiencia',
    loadChildren: () => import('./experiencia/experiencia.module').then( m => m.ExperienciaPageModule)
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./habilidades/habilidades.module').then( m => m.HabilidadesPageModule)
  },
  {
    path: 'idiomas',
    loadChildren: () => import('./idiomas/idiomas.module').then( m => m.IdiomasPageModule)
  },
  {
    path: 'conocimientos',
    loadChildren: () => import('./conocimientos/conocimientos.module').then( m => m.ConocimientosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
