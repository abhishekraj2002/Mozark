import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgraphComponent } from './addgraph.component';

describe('AddgraphComponent', () => {
  let component: AddgraphComponent;
  let fixture: ComponentFixture<AddgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
