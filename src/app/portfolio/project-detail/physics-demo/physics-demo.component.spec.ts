import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsDemoComponent } from './physics-demo.component';

describe('PhysicsDemoComponent', () => {
  let component: PhysicsDemoComponent;
  let fixture: ComponentFixture<PhysicsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
