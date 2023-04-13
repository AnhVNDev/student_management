import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeVerificationComponent } from './fee-verification.component';

describe('FeeVerificationComponent', () => {
  let component: FeeVerificationComponent;
  let fixture: ComponentFixture<FeeVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
