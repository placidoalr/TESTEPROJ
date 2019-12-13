import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvasRealizadasComponent } from './provas-realizadas.component';

describe('ProvasRealizadasComponent', () => {
  let component: ProvasRealizadasComponent;
  let fixture: ComponentFixture<ProvasRealizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvasRealizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvasRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
