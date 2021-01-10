import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAdminPageRoutingModule } from './user-admin-routing.module';

import { UserAdminPage } from './user-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAdminPageRoutingModule
  ],
  declarations: [UserAdminPage]
})
export class UserAdminPageModule {}
