import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { editCustomerComponent } from './editCustomer.component';

describe('editCustomerComponent', () => {
  let component: editCustomerComponent;
  let fixture: ComponentFixture<editCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ editCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(editCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
