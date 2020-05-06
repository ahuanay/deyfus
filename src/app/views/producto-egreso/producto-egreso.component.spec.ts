import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEgresoComponent } from './producto-egreso.component';

describe('ProductoEgresoComponent', () => {
  let component: ProductoEgresoComponent;
  let fixture: ComponentFixture<ProductoEgresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoEgresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
