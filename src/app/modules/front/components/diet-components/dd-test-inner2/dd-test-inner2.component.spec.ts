import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdTestInner2Component } from './dd-test-inner2.component';

describe('DdTestInner2Component', () => {
  let component: DdTestInner2Component;
  let fixture: ComponentFixture<DdTestInner2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdTestInner2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdTestInner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
