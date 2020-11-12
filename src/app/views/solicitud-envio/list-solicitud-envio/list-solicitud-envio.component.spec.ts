import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSolicitudEnvioComponent } from './list-solicitud-envio.component';

describe('ListSolicitudEnvioComponent', () => {
  let component: ListSolicitudEnvioComponent;
  let fixture: ComponentFixture<ListSolicitudEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSolicitudEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSolicitudEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
