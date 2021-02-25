import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioProfPageRoutingModule } from './formulario-prof-routing.module';

import { FormularioProfPage } from './formulario-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioProfPageRoutingModule
  ],
  declarations: [FormularioProfPage]
})
export class FormularioProfPageModule {}
