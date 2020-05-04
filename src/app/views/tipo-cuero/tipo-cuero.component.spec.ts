import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCueroComponent } from './tipo-cuero.component';

describe('TipoCueroComponent', () => {
  let component: TipoCueroComponent;
  let fixture: ComponentFixture<TipoCueroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCueroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
