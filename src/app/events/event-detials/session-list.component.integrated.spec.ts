import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionListComponent } from './session-list.component';
import { DebugElement } from '@angular/core';
import { async } from 'q';
import { AuthService } from 'src/app/user/auth.service';
import { VoteService } from './vote.Service';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

  beforeEach(async(() => {
    let mockAuthService = {},
      mockVoteService = {};

    TestBed.configureTestingModule({
      imports: [],
      declarations: [SessionListComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoteService, useValue: mockVoteService }
      ],
      schemas: []
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });
});
