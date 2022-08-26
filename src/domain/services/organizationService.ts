import { Err } from '../errors/error';
import { Organization } from '../models/organization';
import { OrganizationId } from '../models/organizationId';
import { UserId } from '../models/userId';
import { OrganizationRepository } from '../repositories/organization/organizationRepository';

type Args = {
  organizationRepo: OrganizationRepository;
};

export type CreateOrganizationResponse = {
  err: Err | null;
};

type GetOrganizationResponse = {
  organizations: Organization[] | null;
};

export const organizationService = ({ organizationRepo }: Args) => {
  const create = ({
    organization,
  }: {
    organization: Organization;
  }): CreateOrganizationResponse => {
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

  const getBelongingOrganizations = (
    userId: UserId
  ): GetOrganizationResponse => {
    const response = organizationRepo.getBelongingOrganizations(userId);
    const { organizations } = response;
    return { organizations };
  };

  const IsOrganizationExist = ({
    organizationId,
  }: {
    organizationId: OrganizationId;
  }): { exists: boolean; err: Err | null } => {
    const { isExist, err } =
      organizationRepo.checkOrganizationExist(organizationId);
    return { exists: isExist, err };
  };

  return {
    create,
    getBelongingOrganizations,
  };
};
