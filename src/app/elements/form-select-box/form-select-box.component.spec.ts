import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectBoxComponent } from './form-select-box.component';

describe('FormSelectBoxComponent', () => {
  let component: FormSelectBoxComponent;
  let fixture: ComponentFixture<FormSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSelectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
