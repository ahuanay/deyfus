import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSolicitudEnvioComponent } from './delete-solicitud-envio.component';

describe('DeleteSolicitudEnvioComponent', () => {
  let component: DeleteSolicitudEnvioComponent;
  let fixture: ComponentFixture<DeleteSolicitudEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSolicitudEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSolicitudEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
