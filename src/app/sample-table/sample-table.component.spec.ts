import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTableComponent } from './sample-table.component';

describe('SampleTableComponent', () => {
  let component: SampleTableComponent;
  let fixture: ComponentFixture<SampleTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleTableComponent]
    });
    fixture = TestBed.createComponent(SampleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
