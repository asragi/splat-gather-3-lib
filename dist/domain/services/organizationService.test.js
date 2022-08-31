"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const organizationService_1 = require("./organizationService");
const testOrg = {
    id: 'Test',
};
const mockCreate = jest.fn((organization) => {
    if (organization.id === testOrg.id)
        return {
            err: {
                message: 'OrganizationIsAlreadyExists',
                innerError: null,
            },
        };
    return {
        err: null,
    };
});
const mockGet = jest.fn((id) => {
    if (id === testOrg.id)
        return {
            err: null,
            organization: testOrg,
        };
    return {
        err: {
            message: 'OrganizationWasNotFound',
            innerError: null,
        },
        organization: null,
    };
});
const mockCheck = jest.fn((id) => {
    if (id === testOrg.id)
        return {
            err: null,
            isExist: true,
        };
    return {
        err: null,
        isExist: false,
    };
});
const mockOrgRepo = {
    create: mockCreate,
    getOrganization: mockGet,
    getBelongingOrganizations: jest.fn(),
    getAllTeamUser: jest.fn(),
    getOrganizationMember: jest.fn(),
    checkOrganizationExist: mockCheck,
};
describe('OrganizationService', () => {
    describe('create', () => {
        it('success', () => {
            const service = (0, organizationService_1.organizationService)({ organizationRepo: mockOrgRepo });
            const org = {
                id: 'success',
            };
            const response = service.create({ organization: org });
            expect(response.err).toBeNull();
        });
        it('failure', () => {
            const service = (0, organizationService_1.organizationService)({ organizationRepo: mockOrgRepo });
            const org = {
                id: testOrg.id,
            };
            const response = service.create({ organization: org });
            expect(response.err).not.toBeNull();
        });
    });
});
