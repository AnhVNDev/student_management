import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentInEventComponent } from './list-student-in-event.component';

describe('ListStudentInEventComponent', () => {
  let component: ListStudentInEventComponent;
  let fixture: ComponentFixture<ListStudentInEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStudentInEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStudentInEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
