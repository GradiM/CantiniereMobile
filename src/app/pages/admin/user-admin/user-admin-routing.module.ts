import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAdminPage } from './user-admin.page';

const routes: Routes = [
  {
    path: '',
    component: UserAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAdminPageRoutingModule {}
