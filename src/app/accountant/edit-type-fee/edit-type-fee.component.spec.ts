import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeFeeComponent } from './edit-type-fee.component';

describe('EditTypeFeeComponent', () => {
  let component: EditTypeFeeComponent;
  let fixture: ComponentFixture<EditTypeFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeFeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTypeFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
