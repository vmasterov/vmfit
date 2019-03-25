import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPanelAccordeonComponent } from './food-panel-accordeon.component';

describe('FoodPanelAccordeonComponent', () => {
  let component: FoodPanelAccordeonComponent;
  let fixture: ComponentFixture<FoodPanelAccordeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodPanelAccordeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPanelAccordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
