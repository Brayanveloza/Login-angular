import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosMaestroPage } from './datos-maestro.page';

const routes: Routes = [
  {
    path: '',
    component: DatosMaestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosMaestroPageRoutingModule {}
