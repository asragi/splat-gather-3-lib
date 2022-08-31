export const organizationService = ({ organizationRepo }) => {
    const create = ({ organization, }) => {
        const { exists, err } = IsOrganizationExist({
            organizationId: organization.id,
        });
        if (err !== null) {
            return {
                err: { message: 'CreateOrganizationError', innerError: err },
            };
        }
        if (exists) {
            return {
                err: {
                    message: 'OrganizationIsAlreadyExists',
                    innerError: null,
                },
            };
        }
        const response = organizationRepo.create(organization);
        return {
            err: response.err,
        };
    };
    const getBelongingOrganizations = (userId) => {
        const response = organizationRepo.getBelongingOrganizations(userId);
        const { organizations } = response;
        return { organizations };
    };
    const IsOrganizationExist = ({ organizationId, }) => {
        const { isExist, err } = organizationRepo.checkOrganizationExist(organizationId);
        return { exists: isExist, err };
    };
    return {
        create,
        getBelongingOrganizations,
    };
};
