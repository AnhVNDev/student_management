import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialVerificationComponent } from './financial-verification.component';

describe('FinancialVerificationComponent', () => {
  let component: FinancialVerificationComponent;
  let fixture: ComponentFixture<FinancialVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
