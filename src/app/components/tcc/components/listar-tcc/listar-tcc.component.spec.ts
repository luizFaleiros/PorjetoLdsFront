import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTccComponent } from './listar-tcc.component';

describe('ListarTccComponent', () => {
  let component: ListarTccComponent;
  let fixture: ComponentFixture<ListarTccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
