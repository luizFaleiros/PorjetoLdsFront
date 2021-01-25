import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTccComponent } from './update-tcc.component';

describe('UpdateTccComponent', () => {
  let component: UpdateTccComponent;
  let fixture: ComponentFixture<UpdateTccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
