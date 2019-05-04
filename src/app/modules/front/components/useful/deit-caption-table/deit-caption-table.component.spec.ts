import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeitCaptionTableComponent } from './deit-caption-table.component';

describe('DeitCaptionTableComponent', () => {
  let component: DeitCaptionTableComponent;
  let fixture: ComponentFixture<DeitCaptionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeitCaptionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeitCaptionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
