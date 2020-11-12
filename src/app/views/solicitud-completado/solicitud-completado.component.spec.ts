import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCompletadoComponent } from './solicitud-completado.component';

describe('SolicitudCompletadoComponent', () => {
  let component: SolicitudCompletadoComponent;
  let fixture: ComponentFixture<SolicitudCompletadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudCompletadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudCompletadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
