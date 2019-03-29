import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavToolPanelComponent } from './sidenav-tool-panel.component';

describe('SidenavToolPanelComponent', () => {
  let component: SidenavToolPanelComponent;
  let fixture: ComponentFixture<SidenavToolPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavToolPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavToolPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
