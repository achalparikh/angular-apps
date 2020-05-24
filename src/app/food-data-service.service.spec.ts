import { TestBed } from '@angular/core/testing';

import { FoodDataServiceService } from './food-data-service.service';

describe('FoodDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodDataServiceService = TestBed.get(FoodDataServiceService);
    expect(service).toBeTruthy();
  });
});
