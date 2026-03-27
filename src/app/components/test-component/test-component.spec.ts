import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test-component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('value has to be zero', () => {
    const comp = new TestComponent();
    expect(comp.value).toBe(0);
    comp.value = 1;
    expect(comp.value).toBe(1);
  });
});
