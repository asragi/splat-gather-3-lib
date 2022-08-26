import { TeamUser } from '../models/teamUser';
import {
  CheckArgs,
  CheckResult,
  CreateArgs,
  TeamUserRepository,
} from '../repositories/teamUserRepository';
import { teamUserService } from './teamUserService';

const testUser: TeamUser = {
  id: 'Test',
  ownerId: 'TestUser',
  joiningOrganization: 'OrganizationId',
};

const testNewUser: TeamUser = {
  id: 'TestNew',
  ownerId: 'TestNewUser',
  joiningOrganization: 'OrganizationId',
};

const mockCreate = jest.fn((_args: CreateArgs) => {
  return {
    err: null,
  };
});

const mockCheck = jest.fn((args: CheckArgs): CheckResult => {
  const { ownerId, organizationId } = args;
  if (
    ownerId === testUser.ownerId &&
    organizationId === testUser.joiningOrganization
  )
    return {
      err: null,
      exist: true,
    };
  return {
    err: null,
    exist: false,
  };
});
const mockRepo: TeamUserRepository = {
  create: mockCreate,
  checkExist: mockCheck,
};

describe('TeamUserService', () => {
  describe('Create', () => {
    it('Success', () => {
      const service = teamUserService({ teamUserRepo: mockRepo });
      const response = service.create({ teamUser: testNewUser });
      expect(response.err).toBeNull();
    });
    it('Failure', () => {
      const service = teamUserService({ teamUserRepo: mockRepo });
      const response = service.create({ teamUser: testUser });
      expect(response.err).not.toBeNull();
    });
  });
});
