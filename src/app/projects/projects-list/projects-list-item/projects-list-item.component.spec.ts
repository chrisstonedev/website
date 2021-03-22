import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectsListItemComponent } from './projects-list-item.component';

describe('ProjectsListItemComponent', () => {
  let component: ProjectsListItemComponent;
  let fixture: ComponentFixture<ProjectsListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
