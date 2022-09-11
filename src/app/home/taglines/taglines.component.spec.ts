import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaglinesComponent } from './taglines.component';
import { AnimationBuilder } from '@angular/animations';

describe('TaglinesComponent', () => {
  let component: TaglinesComponent;
  let fixture: ComponentFixture<TaglinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaglinesComponent],
      providers: [AnimationBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaglinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
