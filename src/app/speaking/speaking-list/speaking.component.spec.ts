import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SpeakingComponent} from './speaking.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('SpeakingComponent', () => {
  let component: SpeakingComponent;
  let fixture: ComponentFixture<SpeakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeakingComponent],
      imports: [RouterTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
