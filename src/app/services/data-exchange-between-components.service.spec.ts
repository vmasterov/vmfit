import { TestBed } from '@angular/core/testing';

import { ToggleFoodPanelService } from './toggle-food-panel.service';

describe('ToggleFoodPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToggleFoodPanelService = TestBed.get(ToggleFoodPanelService);
    expect(service).toBeTruthy();
  });
});
