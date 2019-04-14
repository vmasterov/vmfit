import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdTestInner1Component } from './dd-test-inner1.component';

describe('DdTestInner1Component', () => {
  let component: DdTestInner1Component;
  let fixture: ComponentFixture<DdTestInner1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdTestInner1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdTestInner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
