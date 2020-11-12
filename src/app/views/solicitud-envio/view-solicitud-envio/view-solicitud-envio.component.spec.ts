import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSolicitudEnvioComponent } from './view-solicitud-envio.component';

describe('ViewSolicitudEnvioComponent', () => {
  let component: ViewSolicitudEnvioComponent;
  let fixture: ComponentFixture<ViewSolicitudEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSolicitudEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSolicitudEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
