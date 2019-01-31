import { VoteService } from './vote.Service';
import { ISession } from '../shared/event.module';
import { Observable, of } from 'rxjs';
describe('VoteService', () => {
  let voteService: VoteService, mockHttp;
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voteService = new VoteService(mockHttp);
  });

  describe('Delete voter', () => {
    it('should remove the voter from the list of voters', () => {
      const session = { id: 6, voters: ['joe', 'john'] };
      mockHttp.delete.and.returnValue(of(false));
      voteService.deleteVoter(3, <ISession>session, 'joe');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });

    it('should call http.delete at the right url', () => {
      const session = { id: 6, voters: ['john', 'joe'] };
      mockHttp.delete.and.returnValue(of(false));

      voteService.deleteVoter(3, <ISession>session, 'joe');

      expect(mockHttp.delete).toHaveBeenCalledWith(
        '/api/events/3/sessions/6/voters/joe'
      );
    });
  });
});
