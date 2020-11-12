import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaEnvioComponent } from './incidencia-envio.component';

describe('IncidenciaEnvioComponent', () => {
  let component: IncidenciaEnvioComponent;
  let fixture: ComponentFixture<IncidenciaEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciaEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
