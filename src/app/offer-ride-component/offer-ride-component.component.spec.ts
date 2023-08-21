import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferRideComponentComponent } from './offer-ride-component.component';

describe('OfferRideComponentComponent', () => {
  let component: OfferRideComponentComponent;
  let fixture: ComponentFixture<OfferRideComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferRideComponentComponent]
    });
    fixture = TestBed.createComponent(OfferRideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
