import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStoreComponent } from './add-new-store.component';

describe('AddNewStoreComponent', () => {
  let component: AddNewStoreComponent;
  let fixture: ComponentFixture<AddNewStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
