import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductoEgresoComponent } from './create-producto-egreso.component';

describe('CreateProductoEgresoComponent', () => {
  let component: CreateProductoEgresoComponent;
  let fixture: ComponentFixture<CreateProductoEgresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductoEgresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductoEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
