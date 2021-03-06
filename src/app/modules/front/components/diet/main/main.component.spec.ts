import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietComponent } from './main.component';

describe('DietComponent', () => {
  let component: DietComponent;
  let fixture: ComponentFixture<DietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
