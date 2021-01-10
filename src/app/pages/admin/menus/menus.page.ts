import { Component, OnInit } from '@angular/core';
import { MenuOUT } from 'src/app/shared/interfaces/menu';
import { AdminService } from 'src/app/shared/services/admin.service';
import { MenuService } from 'src/app/shared/services/menu.service';

import { API_URL } from '../../../shared/constants/api-url';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})
export class MenusPage implements OnInit {

  menus: Array<MenuOUT>;
  menu: any;
  
  constructor(private menuService: MenuService,private adminService: AdminService) { }

  ngOnInit() {
    this.listMenu();
  }

  listMenu(): void{
    this.menuService.listMenu()
    .subscribe((data: Array<MenuOUT>) => {
      this.menus = data; 
      this.menus.forEach((menu) => {
        this.menuService.getMenuImage(menu.id).subscribe(
            (image) => {
              menu.imgUrl = `${API_URL}/`+image.imagePath;
            },
            (error) => {
              console.log(error);
            }
         );
      });
    })
  }

}
