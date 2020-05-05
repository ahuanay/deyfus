import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductoIngresoComponent } from './list-producto-ingreso.component';

describe('ListProductoIngresoComponent', () => {
  let component: ListProductoIngresoComponent;
  let fixture: ComponentFixture<ListProductoIngresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductoIngresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductoIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
