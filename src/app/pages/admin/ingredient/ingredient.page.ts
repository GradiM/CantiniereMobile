import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IngredientOUT } from 'src/app/shared/interfaces/ingredient';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.page.html',
  styleUrls: ['./ingredient.page.scss'],
})
export class IngredientPage implements OnInit {

  ingredient: any;
  paramId: Params;
  ingredients: Array<IngredientOUT>;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    //private ingredientService: IngredientService,
    private adminService: AdminService) { }

  ngOnInit() {
    this.listIng();
  }
  listIng(): void{
    this.adminService.listIng()
    .subscribe((data: Array<IngredientOUT>) => {
      console.log(data)
      this.ingredients = data; 
    })
  }

}
