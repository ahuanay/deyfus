import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductoEgresoComponent } from './delete-producto-egreso.component';

describe('DeleteProductoEgresoComponent', () => {
  let component: DeleteProductoEgresoComponent;
  let fixture: ComponentFixture<DeleteProductoEgresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProductoEgresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductoEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
