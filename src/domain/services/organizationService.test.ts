import { Organization } from '../models/organization';
import { OrganizationId } from '../models/organizationId';
import {
  CheckExistResult,
  CreateOrganizationResult,
  GetOrganizationResult,
  OrganizationRepository,
} from '../repositories/organization/organizationRepository';
import { organizationService } from './organizationService';

const testOrg: Organization = {
  id: 'Test',
};

const mockCreate = jest.fn(
  (organization: Organization): CreateOrganizationResult => {
    if (organization.id === testOrg.id)
      return {
        err: {
          message: 'OrganizationIsAlreadyExists',
          innerError: null,
        },
      };
    return {
      err: null,
    };
  }
);

const mockGet = jest.fn((id: OrganizationId): GetOrganizationResult => {
  if (id === testOrg.id)
    return {
      err: null,
      organization: testOrg,
    };
  return {
    err: {
      message: 'OrganizationWasNotFound',
      innerError: null,
    },
    organization: null,
  };
});

const mockCheck = jest.fn((id: OrganizationId): CheckExistResult => {
  if (id === testOrg.id)
    return {
      err: null,
      isExist: true,
    };
  return {
    err: null,
    isExist: false,
  };
});

const mockOrgRepo: OrganizationRepository = {
  create: mockCreate,
  getOrganization: mockGet,
  getBelongingOrganizations: jest.fn(),
  getAllTeamUser: jest.fn(),
  getOrganizationMember: jest.fn(),
  checkOrganizationExist: mockCheck,
};

describe('OrganizationService', () => {
  describe('create', () => {
    it('success', () => {
      const service = organizationService({ organizationRepo: mockOrgRepo });
      const org: Organization = {
        id: 'success',
      };
      const response = service.create({ organization: org });
      expect(response.err).toBeNull();
    });
    it('failure', () => {
      const service = organizationService({ organizationRepo: mockOrgRepo });
      const org: Organization = {
        id: testOrg.id,
      };
      const response = service.create({ organization: org });
      expect(response.err).not.toBeNull();
    });
  });
});
