import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageMenuPage } from './manage-menu.page';

describe('ManageMenuPage', () => {
  let component: ManageMenuPage;
  let fixture: ComponentFixture<ManageMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
