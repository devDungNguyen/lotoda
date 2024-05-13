import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IOTDashboardPage } from './iot-dashboard.page';

describe('IOTDashboardPage', () => {
  let component: IOTDashboardPage;
  let fixture: ComponentFixture<IOTDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IOTDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
