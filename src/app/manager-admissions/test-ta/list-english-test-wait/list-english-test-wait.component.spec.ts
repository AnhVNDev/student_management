import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnglishTestWaitComponent } from './list-english-test-wait.component';

describe('ListEnglishTestWaitComponent', () => {
  let component: ListEnglishTestWaitComponent;
  let fixture: ComponentFixture<ListEnglishTestWaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnglishTestWaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEnglishTestWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
