import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductoEgresoComponent } from './list-producto-egreso.component';

describe('ListProductoEgresoComponent', () => {
  let component: ListProductoEgresoComponent;
  let fixture: ComponentFixture<ListProductoEgresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductoEgresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductoEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
