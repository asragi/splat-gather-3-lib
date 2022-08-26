import { Err } from '../errors/error';
import {
  CheckArgs,
  CreateArgs,
  TeamUserRepository,
} from '../repositories/teamUserRepository';

type Args = {
  teamUserRepo: TeamUserRepository;
};

type CreateResponse = {
  err: Err | null;
};

export const teamUserService = ({ teamUserRepo }: Args) => {
  const create = ({ teamUser }: CreateArgs): CreateResponse => {
    const { ownerId, joiningOrganization: organizationId } = teamUser;
    const { err, exist } = isTeamUserExist({ ownerId, organizationId });
    if (err != null)
      return {
        err,
      };
    if (exist)
      return {
        err: {
          message: 'TeamUserAlreadyExist',
          innerError: null,
        },
      };
    const result = teamUserRepo.create({ teamUser });
    return {
      err: result.err,
    };
  };

  const isTeamUserExist = (args: CheckArgs) => {
    const { err, exist } = teamUserRepo.checkExist(args);
    return { err, exist };
  };

  return {
    create,
  };
};
