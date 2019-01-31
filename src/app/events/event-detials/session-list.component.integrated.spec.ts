import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SessionListComponent } from './session-list.component';
import { DebugElement } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { VoteService } from './vote.Service';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from './duration.pipe';
import { CollasibleWellComponent } from 'src/app/common/collapsible-well.component';
import { By } from '@angular/platform-browser';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

  beforeEach(async(() => {
    let mockAuthService = {
        isAuthenticated: () => true,
        currentUser: { userName: 'joe' }
      },
      mockVoteService = { userHasVoted: () => true };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        UpvoteComponent,
        DurationPipe,
        CollasibleWellComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoteService, useValue: mockVoteService }
      ],
      schemas: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  // start testing

  describe('Initial display', () => {
    it('should have the correct session title', () => {
      component.sessions = [
        {
          id: 3,
          name: 'session 1',
          presenter: 'joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['joe', 'john']
        }
      ];

      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector('[well-title]').textContent).toContain(
        'session 1'
      );

      expect(
        debugEl.query(By.css('[well-title]')).nativeElement.textContent
      ).toContain('session 1');
    });
  });
});
