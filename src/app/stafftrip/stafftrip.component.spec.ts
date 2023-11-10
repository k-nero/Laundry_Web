import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StafftripComponent } from './stafftrip.component';

describe('StafftripComponent', () => {
  let component: StafftripComponent;
  let fixture: ComponentFixture<StafftripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StafftripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StafftripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
