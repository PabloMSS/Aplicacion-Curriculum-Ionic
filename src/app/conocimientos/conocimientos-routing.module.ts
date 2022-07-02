import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConocimientosPage } from './conocimientos.page';

const routes: Routes = [
  {
    path: '',
    component: ConocimientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConocimientosPageRoutingModule {}
