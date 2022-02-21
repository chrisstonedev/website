import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TaglinesComponent} from './taglines.component';

describe('TaglinesComponent', () => {
  let component: TaglinesComponent;
  let fixture: ComponentFixture<TaglinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaglinesComponent],
    })
      .compileComponents();
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
