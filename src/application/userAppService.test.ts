import { UserAppService } from '.';
import { mockRepo } from '../infrastructure/mock/mockUserRepo';
import { StatusCreated } from './lib/status';

describe('userAppService', () => {
  describe('create', () => {
    it('success', () => {
      const service = UserAppService.service({
        userRepository: mockRepo,
      });
      const command: UserAppService.CreateCommand = {
        userId: 'newUser',
      };
      const dto = service.create(command);
      expect(dto.status).toBe(StatusCreated);
    });
  });
});
