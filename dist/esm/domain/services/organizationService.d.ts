import { Err } from '../errors/error';
import { Organization } from '../models/organization';
import { UserId } from '../models/userId';
import { OrganizationRepository } from '../repositories/organization/organizationRepository';
declare type Args = {
    organizationRepo: OrganizationRepository;
};
export declare type CreateOrganizationResponse = {
    err: Err | null;
};
declare type GetOrganizationResponse = {
    organizations: Organization[] | null;
};
export declare const organizationService: ({ organizationRepo }: Args) => {
    create: ({ organization, }: {
        organization: Organization;
    }) => CreateOrganizationResponse;
    getBelongingOrganizations: (userId: UserId) => GetOrganizationResponse;
};
export {};
//# sourceMappingURL=organizationService.d.ts.map