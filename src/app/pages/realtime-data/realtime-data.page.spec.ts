import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealtimeDataPage } from './realtime-data.page';

describe('RealtimeDataPage', () => {
  let component: RealtimeDataPage;
  let fixture: ComponentFixture<RealtimeDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
