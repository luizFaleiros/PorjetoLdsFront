import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhoCrudComponent } from './trabalho-crud.component';

describe('TrabalhoCrudComponent', () => {
  let component: TrabalhoCrudComponent;
  let fixture: ComponentFixture<TrabalhoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabalhoCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
