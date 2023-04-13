import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTaComponent } from './test-ta.component';

describe('TestTaComponent', () => {
  let component: TestTaComponent;
  let fixture: ComponentFixture<TestTaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
