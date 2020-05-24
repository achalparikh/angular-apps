import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBodyComponent } from './child-body.component';

describe('ChildBodyComponent', () => {
  let component: ChildBodyComponent;
  let fixture: ComponentFixture<ChildBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
