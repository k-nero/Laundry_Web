import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBuildingComponent } from './update-building.component';

describe('UpdateBuildingComponent', () => {
  let component: UpdateBuildingComponent;
  let fixture: ComponentFixture<UpdateBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBuildingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
