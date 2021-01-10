import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserAdminPage } from './user-admin.page';

describe('UserAdminPage', () => {
  let component: UserAdminPage;
  let fixture: ComponentFixture<UserAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
