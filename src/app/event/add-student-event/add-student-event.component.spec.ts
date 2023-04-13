import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentEventComponent } from './add-student-event.component';

describe('AddStudentEventComponent', () => {
  let component: AddStudentEventComponent;
  let fixture: ComponentFixture<AddStudentEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
