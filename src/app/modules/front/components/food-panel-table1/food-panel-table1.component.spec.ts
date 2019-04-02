import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPanelTable1Component } from './food-panel-table1.component';

describe('FoodPanelTable1Component', () => {
  let component: FoodPanelTable1Component;
  let fixture: ComponentFixture<FoodPanelTable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodPanelTable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPanelTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
