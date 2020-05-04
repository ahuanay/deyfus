import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoCueroComponent } from './create-tipo-cuero.component';

describe('CreateTipoCueroComponent', () => {
  let component: CreateTipoCueroComponent;
  let fixture: ComponentFixture<CreateTipoCueroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTipoCueroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipoCueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
