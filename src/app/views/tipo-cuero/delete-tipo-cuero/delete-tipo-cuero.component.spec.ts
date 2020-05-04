import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTipoCueroComponent } from './delete-tipo-cuero.component';

describe('DeleteTipoCueroComponent', () => {
  let component: DeleteTipoCueroComponent;
  let fixture: ComponentFixture<DeleteTipoCueroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTipoCueroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTipoCueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
