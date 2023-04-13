import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoAccountComponent } from './auto-account.component';

describe('AutoAccountComponent', () => {
  let component: AutoAccountComponent;
  let fixture: ComponentFixture<AutoAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
