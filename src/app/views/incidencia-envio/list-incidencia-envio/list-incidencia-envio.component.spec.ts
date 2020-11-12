import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIncidenciaEnvioComponent } from './list-incidencia-envio.component';

describe('ListIncidenciaEnvioComponent', () => {
  let component: ListIncidenciaEnvioComponent;
  let fixture: ComponentFixture<ListIncidenciaEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIncidenciaEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIncidenciaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
