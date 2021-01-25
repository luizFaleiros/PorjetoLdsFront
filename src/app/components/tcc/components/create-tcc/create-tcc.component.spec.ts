import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTccComponent } from './create-tcc.component';

describe('CreateTccComponent', () => {
  let component: CreateTccComponent;
  let fixture: ComponentFixture<CreateTccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
