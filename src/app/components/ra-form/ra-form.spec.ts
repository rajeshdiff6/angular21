import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaForm } from './ra-form';

describe('RaForm', () => {
  let component: RaForm;
  let fixture: ComponentFixture<RaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
