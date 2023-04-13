import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoGWComponent } from './logo-gw.component';

describe('LogoGWComponent', () => {
  let component: LogoGWComponent;
  let fixture: ComponentFixture<LogoGWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoGWComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoGWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
