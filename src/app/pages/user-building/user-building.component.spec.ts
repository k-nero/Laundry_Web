import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBuildingComponent } from './user-building.component';

describe('UserBuildingComponent', () => {
  let component: UserBuildingComponent;
  let fixture: ComponentFixture<UserBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBuildingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
