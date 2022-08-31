"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const mockUserRepo_1 = require("../infrastructure/mock/mockUserRepo");
const status_1 = require("./lib/status");
describe('userAppService', () => {
    describe('create', () => {
        it('success', () => {
            const service = _1.UserAppService.service({
                userRepository: mockUserRepo_1.mockRepo,
            });
            const command = {
                userId: 'newUser',
            };
            const dto = service.create(command);
            expect(dto.status).toBe(status_1.StatusCreated);
        });
    });
});
