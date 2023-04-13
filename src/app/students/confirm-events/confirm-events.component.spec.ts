import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEventsComponent } from './confirm-events.component';

describe('ConfirmEventsComponent', () => {
  let component: ConfirmEventsComponent;
  let fixture: ComponentFixture<ConfirmEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
