import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraversyComponent } from './traversy.component';

describe('TraversyComponent', () => {
  let component: TraversyComponent;
  let fixture: ComponentFixture<TraversyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraversyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraversyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
