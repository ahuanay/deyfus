import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSolicitudCompletadoComponent } from './list-solicitud-completado.component';

describe('ListSolicitudCompletadoComponent', () => {
  let component: ListSolicitudCompletadoComponent;
  let fixture: ComponentFixture<ListSolicitudCompletadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSolicitudCompletadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSolicitudCompletadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
