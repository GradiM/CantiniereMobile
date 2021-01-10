import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'menus',
    loadChildren: () => import('./menus/menus.module').then( m => m.MenusPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'newmeal',
    loadChildren: () => import('./newmeal/newmeal.module').then( m => m.NewmealPageModule)
  },
  {
    path: 'newmenu',
    loadChildren: () => import('./newmenu/newmenu.module').then( m => m.NewmenuPageModule)
  },
  {
    path: 'user-admin/:id',
    loadChildren: () => import('./user-admin/user-admin.module').then( m => m.UserAdminPageModule)
  },
  {
    path: 'manage-meal/:id',
    loadChildren: () => import('./manage-meal/manage-meal.module').then( m => m.ManageMealPageModule)
  },
  {
    path: 'manage-menu/:id',
    loadChildren: () => import('./manage-menu/manage-menu.module').then( m => m.ManageMenuPageModule)
  },
  {
    path: 'ingredient',
    loadChildren: () => import('./ingredient/ingredient.module').then( m => m.IngredientPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
