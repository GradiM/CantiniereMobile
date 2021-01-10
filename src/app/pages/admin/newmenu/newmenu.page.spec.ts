import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewmenuPage } from './newmenu.page';

describe('NewmenuPage', () => {
  let component: NewmenuPage;
  let fixture: ComponentFixture<NewmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
