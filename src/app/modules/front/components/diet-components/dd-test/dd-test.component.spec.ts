import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdTestComponent } from './dd-test.component';

describe('DdTestComponent', () => {
  let component: DdTestComponent;
  let fixture: ComponentFixture<DdTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
