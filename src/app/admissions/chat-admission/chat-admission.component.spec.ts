import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAdmissionComponent } from './chat-admission.component';

describe('ChatAdmissionComponent', () => {
  let component: ChatAdmissionComponent;
  let fixture: ComponentFixture<ChatAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatAdmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
