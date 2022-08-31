import { Err } from '../errors/error';
import { CreateArgs, TeamUserRepository } from '../repositories/teamUserRepository';
declare type Args = {
    teamUserRepo: TeamUserRepository;
};
declare type CreateResponse = {
    err: Err | null;
};
export declare const teamUserService: ({ teamUserRepo }: Args) => {
    create: ({ teamUser }: CreateArgs) => CreateResponse;
};
export {};
//# sourceMappingURL=teamUserService.d.ts.map