import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleExampleSmartComponent } from './simple-example-smart.component';

describe('SimpleExampleSmartComponent', () => {
  let component: SimpleExampleSmartComponent;
  let fixture: ComponentFixture<SimpleExampleSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleExampleSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleExampleSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
