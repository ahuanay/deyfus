import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudEnvioComponent } from './solicitud-envio.component';

describe('SolicitudEnvioComponent', () => {
  let component: SolicitudEnvioComponent;
  let fixture: ComponentFixture<SolicitudEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
