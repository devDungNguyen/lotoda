import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevicesManagementPage } from './devices-management.page';

describe('DevicesManagementPage', () => {
  let component: DevicesManagementPage;
  let fixture: ComponentFixture<DevicesManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
