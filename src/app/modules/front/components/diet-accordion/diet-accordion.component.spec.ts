import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietAccordionComponent } from './diet-accordion.component';

describe('DietAccordionComponent', () => {
  let component: DietAccordionComponent;
  let fixture: ComponentFixture<DietAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
