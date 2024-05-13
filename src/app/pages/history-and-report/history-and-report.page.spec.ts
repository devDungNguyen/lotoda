import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryAndReportPage } from './history-and-report.page';

describe('HistoryAndReportPage', () => {
  let component: HistoryAndReportPage;
  let fixture: ComponentFixture<HistoryAndReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAndReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
