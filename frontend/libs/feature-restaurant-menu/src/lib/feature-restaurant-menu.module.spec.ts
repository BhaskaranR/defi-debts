import { async, TestBed } from '@angular/core/testing';
import { FeatureRestaurantMenuModule } from './feature-menu.module';

describe('FeatureRestaurantMenuModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureRestaurantMenuModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureRestaurantMenuModule).toBeDefined();
  });
});
