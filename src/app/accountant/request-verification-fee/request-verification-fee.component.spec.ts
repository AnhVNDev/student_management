import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVerificationFeeComponent } from './request-verification-fee.component';

describe('RequestVerificationFeeComponent', () => {
  let component: RequestVerificationFeeComponent;
  let fixture: ComponentFixture<RequestVerificationFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestVerificationFeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestVerificationFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
