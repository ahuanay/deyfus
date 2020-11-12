import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSolicitudCompletadoComponent } from './create-solicitud-completado.component';

describe('CreateSolicitudCompletadoComponent', () => {
  let component: CreateSolicitudCompletadoComponent;
  let fixture: ComponentFixture<CreateSolicitudCompletadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSolicitudCompletadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSolicitudCompletadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
