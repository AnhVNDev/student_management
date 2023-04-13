import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitEnglishComponent } from './wait-english.component';

describe('WaitEnglishComponent', () => {
  let component: WaitEnglishComponent;
  let fixture: ComponentFixture<WaitEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitEnglishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
