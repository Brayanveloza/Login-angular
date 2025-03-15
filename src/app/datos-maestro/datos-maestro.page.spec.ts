import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosMaestroPage } from './datos-maestro.page';

describe('DatosMaestroPage', () => {
  let component: DatosMaestroPage;
  let fixture: ComponentFixture<DatosMaestroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosMaestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
