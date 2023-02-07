import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaberintoaPageRoutingModule } from './laberintoa-routing.module';

import { LaberintoaPage } from './laberintoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaberintoaPageRoutingModule
  ],
  declarations: [LaberintoaPage]
})
export class LaberintoaPageModule {}
