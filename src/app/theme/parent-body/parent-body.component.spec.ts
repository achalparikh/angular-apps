import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBodyComponent } from './parent-body.component';

describe('ParentBodyComponent', () => {
  let component: ParentBodyComponent;
  let fixture: ComponentFixture<ParentBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
