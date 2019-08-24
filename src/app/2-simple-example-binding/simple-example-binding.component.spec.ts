import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleExampleBindingComponent } from './simple-example-binding.component';

describe('SimpleExampleBindingComponent', () => {
  let component: SimpleExampleBindingComponent;
  let fixture: ComponentFixture<SimpleExampleBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleExampleBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleExampleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
