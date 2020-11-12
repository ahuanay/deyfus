import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSolicitudEnvioComponent } from './create-solicitud-envio.component';

describe('CreateSolicitudEnvioComponent', () => {
  let component: CreateSolicitudEnvioComponent;
  let fixture: ComponentFixture<CreateSolicitudEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSolicitudEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSolicitudEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
