import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpeakingTalkComponent} from './speaking-talk.component';
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('SpeakingTalkComponent', () => {
  let component: SpeakingTalkComponent;
  let fixture: ComponentFixture<SpeakingTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeakingTalkComponent],
      imports: [RouterTestingModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: {snapshot: {paramMap: {get: () => 'technical-debt'}}}
      }]
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
