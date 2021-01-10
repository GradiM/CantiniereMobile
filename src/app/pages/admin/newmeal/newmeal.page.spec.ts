import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewmealPage } from './newmeal.page';

describe('NewmealPage', () => {
  let component: NewmealPage;
  let fixture: ComponentFixture<NewmealPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmealPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewmealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
