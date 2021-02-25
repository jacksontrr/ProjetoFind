import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioCliPage } from './formulario-cli.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioCliPageRoutingModule {}
