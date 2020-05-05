import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductoIngresoComponent } from './create-producto-ingreso.component';

describe('CreateProductoIngresoComponent', () => {
  let component: CreateProductoIngresoComponent;
  let fixture: ComponentFixture<CreateProductoIngresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductoIngresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductoIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
