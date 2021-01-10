import { Component, OnInit } from '@angular/core';
import { ImageOUT } from 'src/app/shared/interfaces/image';
import { IngredientOUT } from 'src/app/shared/interfaces/ingredient';
import { MealOUT } from 'src/app/shared/interfaces/meal';
import { User } from 'src/app/shared/interfaces/user';
import { AdminService } from 'src/app/shared/services/admin.service';
import { MealService } from 'src/app/shared/services/meal.service';

import { API_URL } from '../../../shared/constants/api-url';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {

  meals: Array<MealOUT>;
  images: Array<ImageOUT>;
  ingredients: Array<IngredientOUT>;
  users: Array<User>
  meal: any;
  router: any;

  constructor(private adminService: AdminService,private mealService: MealService) { }

  ngOnInit() {
    this.list();
  }

  list(): void{
    this.adminService.list()
    .subscribe((data: Array<MealOUT>) => {
      this.meals = data; 
      this.meals.forEach((meal) => {
        this.mealService.getMealImage(meal.id).subscribe(
            (image) => {
              meal.imgUrl = `${API_URL}/`+image.imagePath;
            },
            (error) => {
              console.log(error);
            }
         );
      });
    })
  }
  listIng(): void{
    this.adminService.listIng()
    .subscribe((data: Array<IngredientOUT>) => {
      console.log(data)
      this.ingredients = data; 
    })
  }

  listUser(): void{
    this.adminService.listUser()
    .subscribe((data: Array<User>) => {
      console.log(data)
      this.users = data; 
    })
  }

  onDelete(id:number){
    this.adminService.delete(id).then(()=>{
      this.meals = this.meals.filter(meal=>meal.id!=id);
    })
  }

}
