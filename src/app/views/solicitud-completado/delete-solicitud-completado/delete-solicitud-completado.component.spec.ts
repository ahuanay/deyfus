import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSolicitudCompletadoComponent } from './delete-solicitud-completado.component';

describe('DeleteSolicitudCompletadoComponent', () => {
  let component: DeleteSolicitudCompletadoComponent;
  let fixture: ComponentFixture<DeleteSolicitudCompletadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSolicitudCompletadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSolicitudCompletadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
