import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipieCardsComponent } from './recipie-cards.component';

describe('RecipieCardsComponent', () => {
  let component: RecipieCardsComponent;
  let fixture: ComponentFixture<RecipieCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipieCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipieCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
