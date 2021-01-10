import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { AdminService } from 'src/app/shared/services/admin.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: any;
  paramId: Params;
  users: Array<User>;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private userService: UserService) { }

  ngOnInit() {
    this.listUser();
  }

  listUser(): void{
    this.adminService.listUser()
    .subscribe((data: Array<User>) => {
      this.users = data; 
    })
  }

}
