import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SpeakingTalkComponent} from './speaking-talk.component';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {ConferenceListComponent} from './conference-list/conference-list.component';

describe('SpeakingTalkComponent', () => {
  let component: SpeakingTalkComponent;
  let fixture: ComponentFixture<SpeakingTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeakingTalkComponent, ConferenceListComponent],
      imports: [RouterTestingModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: {snapshot: {paramMap: {get: () => 'technical-debt'}}}
      }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakingTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
