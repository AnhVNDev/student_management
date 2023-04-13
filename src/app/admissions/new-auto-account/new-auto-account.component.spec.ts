import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAutoAccountComponent } from './new-auto-account.component';

describe('NewAutoAccountComponent', () => {
  let component: NewAutoAccountComponent;
  let fixture: ComponentFixture<NewAutoAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAutoAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAutoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
