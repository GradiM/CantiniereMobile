import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewmenuPageRoutingModule } from './newmenu-routing.module';

import { NewmenuPage } from './newmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewmenuPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewmenuPage]
})
export class NewmenuPageModule {}
