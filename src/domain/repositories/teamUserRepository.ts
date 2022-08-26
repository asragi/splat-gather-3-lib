import { Err } from '../errors/error';
import { OrganizationId } from '../models/organizationId';
import { TeamUser } from '../models/teamUser';
import { UserId } from '../models/userId';

export type CreateArgs = {
  teamUser: Omit<TeamUser, 'id'>;
};

export type CheckArgs = {
  ownerId: UserId;
  organizationId: OrganizationId;
};

export type CreateResult = {
  err: Err | null;
};

export type CheckResult = {
  err: Err | null;
  exist: boolean;
};

export type GetResult = {
  err: Err | null;
  user: TeamUser | null;
};

export type TeamUserRepository = {
  create: (teamUser: CreateArgs) => CreateResult;
  checkExist: (id: CheckArgs) => CheckResult;
  // get: (id: TeamUserId) => GetResult;
};
