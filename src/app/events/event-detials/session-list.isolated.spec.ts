import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.module';

describe('SessionListComponent', () => {
  let component: SessionListComponent, mockAuthSerivce, mockVoteService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthSerivce, mockVoteService);
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions corectlly', () => {
      component.sessions = <ISession[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'intermediate' },
        { name: 'session 3', level: 'advanced' }
      ];

      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
    });

    it('should sort the sessions corectlly', () => {
      component.sessions = <ISession[]>[
        { name: 'session 3', level: 'intermediate' },
        { name: 'session 2', level: 'intermediate' },
        { name: 'session 1', level: 'advanced' }
      ];

      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[2].name).toBe('session 3');
    });
  });
});
