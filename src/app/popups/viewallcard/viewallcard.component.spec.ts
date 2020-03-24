import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcardComponent } from './viewallcard.component';

describe('ViewallcardComponent', () => {
  let component: ViewallcardComponent;
  let fixture: ComponentFixture<ViewallcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
