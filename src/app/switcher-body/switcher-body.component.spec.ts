import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcherBodyComponent } from './switcher-body.component';

describe('SwitcherBodyComponent', () => {
  let component: SwitcherBodyComponent;
  let fixture: ComponentFixture<SwitcherBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitcherBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitcherBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
