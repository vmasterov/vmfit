import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPanelTableComponent } from './food-panel-table.component';

describe('FoodPanelTableComponent', () => {
  let component: FoodPanelTableComponent;
  let fixture: ComponentFixture<FoodPanelTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodPanelTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPanelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
