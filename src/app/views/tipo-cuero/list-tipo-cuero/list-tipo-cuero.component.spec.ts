import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoCueroComponent } from './list-tipo-cuero.component';

describe('ListTipoCueroComponent', () => {
  let component: ListTipoCueroComponent;
  let fixture: ComponentFixture<ListTipoCueroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTipoCueroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipoCueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
