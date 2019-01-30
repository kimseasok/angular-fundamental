import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.module';
import { AuthService } from '../../user/auth.service';
import { VoteService } from './vote.Service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor(public auth: AuthService, private voteService: VoteService) {}

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

  sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
      return 1;
    } else if (s1.name === s2.name) {
      return 0;
    } else {
      return -1;
    }
  }

  sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voteService.deleteVoter(session, this.auth.currentUser.userName);
    } else {
      this.voteService.addVoter(session, this.auth.currentUser.userName);
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(this.sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession) {
    return this.voteService.userHasVoted(
      session,
      this.auth.currentUser.userName
    );
  }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);

      this.sortBy === 'name'
        ? this.visibleSessions.sort(this.sortByNameAsc)
        : this.visibleSessions.sort(this.sortByVotesDesc);
    }
  }
}
