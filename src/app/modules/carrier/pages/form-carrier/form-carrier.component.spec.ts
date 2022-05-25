import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCarrierComponent } from './form-carrier.component';

describe('FormCarrierComponent', () => {
  let component: FormCarrierComponent;
  let fixture: ComponentFixture<FormCarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCarrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
