import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTiendaComponent } from './list-tienda.component';

describe('ListTiendaComponent', () => {
  let component: ListTiendaComponent;
  let fixture: ComponentFixture<ListTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
