import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleInputComponent } from './sample-input.component';

describe('SampleInputComponent', () => {
  let component: SampleInputComponent;
  let fixture: ComponentFixture<SampleInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleInputComponent]
    });
    fixture = TestBed.createComponent(SampleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
