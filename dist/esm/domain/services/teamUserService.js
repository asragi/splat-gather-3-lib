export const teamUserService = ({ teamUserRepo }) => {
    const create = ({ teamUser }) => {
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
    const isTeamUserExist = (args) => {
        const { err, exist } = teamUserRepo.checkExist(args);
        return { err, exist };
    };
    return {
        create,
    };
};
