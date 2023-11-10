import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderhistoryDetailComponent } from './orderhistory-detail.component';

describe('OrderhistoryDetailComponent', () => {
  let component: OrderhistoryDetailComponent;
  let fixture: ComponentFixture<OrderhistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderhistoryDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderhistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
