import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertRulesPage } from './alert-rules.page';

describe('AlertRulesPage', () => {
  let component: AlertRulesPage;
  let fixture: ComponentFixture<AlertRulesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertRulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
