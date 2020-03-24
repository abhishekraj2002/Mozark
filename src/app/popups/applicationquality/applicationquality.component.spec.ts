import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationqualityComponent } from './applicationquality.component';

describe('ApplicationqualityComponent', () => {
  let component: ApplicationqualityComponent;
  let fixture: ComponentFixture<ApplicationqualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationqualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationqualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
