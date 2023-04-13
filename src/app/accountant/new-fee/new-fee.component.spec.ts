import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeeComponent } from './new-fee.component';

describe('NewFeeComponent', () => {
  let component: NewFeeComponent;
  let fixture: ComponentFixture<NewFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
