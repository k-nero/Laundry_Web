import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDirectlyComponent } from './order-directly.component';

describe('OrderDirectlyComponent', () => {
  let component: OrderDirectlyComponent;
  let fixture: ComponentFixture<OrderDirectlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDirectlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDirectlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
