import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SLDDashboardPage } from './sld-dashboard.page';

describe('SLDDashboardPage', () => {
  let component: SLDDashboardPage;
  let fixture: ComponentFixture<SLDDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SLDDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
