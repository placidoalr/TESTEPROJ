import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecProvaComponent } from './exec-prova.component';

describe('ExecProvaComponent', () => {
  let component: ExecProvaComponent;
  let fixture: ComponentFixture<ExecProvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecProvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
