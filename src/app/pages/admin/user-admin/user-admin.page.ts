import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.page.html',
  styleUrls: ['./user-admin.page.scss'],
})
export class UserAdminPage implements OnInit {

  user: any;
  paramId: Params;
  
  constructor(private route: ActivatedRoute,
    private router: Router, 
    private userService: UserService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.paramId = params['id'];
        this.get(+this.paramId)
      })
  }
  get(id: number): void {
    this.userService.user(id)
    .subscribe((data: any) => {
      this.user = data;
    })
  }

  onClick(): void {
    this.userService.update(this.user.id, this.user)
    .subscribe((data)=> {console.log(data)
      this.router.navigate(['/admin/user']);
    });
    
  }

}
