import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIncidenciaEnvioComponent } from './create-incidencia-envio.component';

describe('CreateIncidenciaEnvioComponent', () => {
  let component: CreateIncidenciaEnvioComponent;
  let fixture: ComponentFixture<CreateIncidenciaEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIncidenciaEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIncidenciaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
