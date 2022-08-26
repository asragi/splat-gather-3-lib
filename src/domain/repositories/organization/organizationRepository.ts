import { Err } from '../../errors/error';
import { Organization } from '../../models/organization';
import { OrganizationId } from '../../models/organizationId';
import { TeamUserId } from '../../models/teamUserId';
import { UserId } from '../../models/userId';
import { GetAllTeamUserResult } from './getAllTeamUserResult';
import { GetOrganizationMemberResult } from './getOrganizationMemberResult';

export type CreateOrganizationResult = {
  err: Err | null;
};

export type GetOrganizationResult = {
  err: Err | null;
  organization: Organization | null;
};

export type GetBelongingOrganizationsResult = {
  err: Err | null;
  organizations: Organization[] | null;
};

export type CheckExistResult = {
  err: Err | null;
  isExist: boolean;
};

export type OrganizationRepository = {
  create: (organization: Organization) => CreateOrganizationResult;
  getOrganization: (id: OrganizationId) => GetOrganizationResult;
  checkOrganizationExist: (id: OrganizationId) => CheckExistResult;
  getBelongingOrganizations: (user: UserId) => GetBelongingOrganizationsResult;
  getAllTeamUser: (user: UserId) => GetAllTeamUserResult;
  getOrganizationMember: (teamUser: TeamUserId) => GetOrganizationMemberResult;
};
