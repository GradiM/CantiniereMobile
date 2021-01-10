import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageMealPage } from './manage-meal.page';

describe('ManageMealPage', () => {
  let component: ManageMealPage;
  let fixture: ComponentFixture<ManageMealPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMealPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageMealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
