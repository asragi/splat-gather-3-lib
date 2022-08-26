import { OrganizationId } from './organizationId';
import { TeamUserId } from './teamUserId';
import { UserId } from './userId';

export type TeamUser = {
  id: TeamUserId;
  ownerId: UserId;
  joiningOrganization: OrganizationId;
};
