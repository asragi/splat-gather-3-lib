import { Err } from '../../errors/error';
import { Organization } from '../../models/organization';
import { OrganizationId } from '../../models/organizationId';
import { TeamUserId } from '../../models/teamUserId';
import { UserId } from '../../models/userId';
import { GetAllTeamUserResult } from './getAllTeamUserResult';
import { GetOrganizationMemberResult } from './getOrganizationMemberResult';
export declare type CreateOrganizationResult = {
    err: Err | null;
};
export declare type GetOrganizationResult = {
    err: Err | null;
    organization: Organization | null;
};
export declare type GetBelongingOrganizationsResult = {
    err: Err | null;
    organizations: Organization[] | null;
};
export declare type CheckExistResult = {
    err: Err | null;
    isExist: boolean;
};
export declare type OrganizationRepository = {
    create: (organization: Organization) => CreateOrganizationResult;
    getOrganization: (id: OrganizationId) => GetOrganizationResult;
    checkOrganizationExist: (id: OrganizationId) => CheckExistResult;
    getBelongingOrganizations: (user: UserId) => GetBelongingOrganizationsResult;
    getAllTeamUser: (user: UserId) => GetAllTeamUserResult;
    getOrganizationMember: (teamUser: TeamUserId) => GetOrganizationMemberResult;
};
//# sourceMappingURL=organizationRepository.d.ts.map