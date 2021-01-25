import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TccDetalheComponent } from './tcc-detalhe.component';

describe('TccDetalheComponent', () => {
  let component: TccDetalheComponent;
  let fixture: ComponentFixture<TccDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TccDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TccDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
