import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishtestComponent } from './finishtest.component';

describe('FinishtestComponent', () => {
  let component: FinishtestComponent;
  let fixture: ComponentFixture<FinishtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishtestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
