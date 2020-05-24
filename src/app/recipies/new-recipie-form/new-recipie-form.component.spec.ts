import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipieFormComponent } from './new-recipie-form.component';

describe('NewRecipieFormComponent', () => {
  let component: NewRecipieFormComponent;
  let fixture: ComponentFixture<NewRecipieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRecipieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecipieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
