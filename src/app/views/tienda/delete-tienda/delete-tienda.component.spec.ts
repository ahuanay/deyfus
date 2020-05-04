import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTiendaComponent } from './delete-tienda.component';

describe('DeleteTiendaComponent', () => {
  let component: DeleteTiendaComponent;
  let fixture: ComponentFixture<DeleteTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
