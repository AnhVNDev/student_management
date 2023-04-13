import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAmissionsComponent } from './manager-admissions.component';

describe('ManagerAmissionsComponent', () => {
  let component: ManagerAmissionsComponent;
  let fixture: ComponentFixture<ManagerAmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAmissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerAmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
