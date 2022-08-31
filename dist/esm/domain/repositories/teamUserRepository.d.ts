import { Err } from '../errors/error';
import { OrganizationId } from '../models/organizationId';
import { TeamUser } from '../models/teamUser';
import { UserId } from '../models/userId';
export declare type CreateArgs = {
    teamUser: Omit<TeamUser, 'id'>;
};
export declare type CheckArgs = {
    ownerId: UserId;
    organizationId: OrganizationId;
};
export declare type CreateResult = {
    err: Err | null;
};
export declare type CheckResult = {
    err: Err | null;
    exist: boolean;
};
export declare type GetResult = {
    err: Err | null;
    user: TeamUser | null;
};
export declare type TeamUserRepository = {
    create: (teamUser: CreateArgs) => CreateResult;
    checkExist: (id: CheckArgs) => CheckResult;
};
//# sourceMappingURL=teamUserRepository.d.ts.map