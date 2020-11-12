import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIncidenciaEnvioComponent } from './delete-incidencia-envio.component';

describe('DeleteIncidenciaEnvioComponent', () => {
  let component: DeleteIncidenciaEnvioComponent;
  let fixture: ComponentFixture<DeleteIncidenciaEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteIncidenciaEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIncidenciaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
