import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPerformanceComponent } from './chart-performance.component';

describe('ChartPerformanceComponent', () => {
  let component: ChartPerformanceComponent;
  let fixture: ComponentFixture<ChartPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
