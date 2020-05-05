import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductoIngresoComponent } from './delete-producto-ingreso.component';

describe('DeleteProductoIngresoComponent', () => {
  let component: DeleteProductoIngresoComponent;
  let fixture: ComponentFixture<DeleteProductoIngresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProductoIngresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductoIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
