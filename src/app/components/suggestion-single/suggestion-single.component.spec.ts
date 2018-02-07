import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionSingleComponent } from './suggestion-single.component';

describe('SuggestionSingleComponent', () => {
  let component: SuggestionSingleComponent;
  let fixture: ComponentFixture<SuggestionSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
