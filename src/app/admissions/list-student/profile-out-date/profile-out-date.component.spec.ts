import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOutDateComponent } from './profile-out-date.component';

describe('ProfileOutDateComponent', () => {
  let component: ProfileOutDateComponent;
  let fixture: ComponentFixture<ProfileOutDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileOutDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileOutDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
