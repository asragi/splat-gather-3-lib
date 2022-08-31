"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockUserRepo_1 = require("../../infrastructure/mock/mockUserRepo");
const userService_1 = require("./userService");
describe('test user create', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('create user success', () => {
        const service = (0, userService_1.userService)({ userRepository: mockUserRepo_1.mockRepo });
        const user = {
            userId: 'Test2',
        };
        const response = service.createUser(user);
        expect(mockUserRepo_1.mockRepo.create).toBeCalled();
        expect(mockUserRepo_1.mockRepo.checkExist).toBeCalled();
        expect(response).not.toBeNull();
        expect(response.err).toBeFalsy();
    });
    it('create user failure', () => {
        const service = (0, userService_1.userService)({ userRepository: mockUserRepo_1.mockRepo });
        const user = {
            userId: 'Test',
        };
        const response = service.createUser(user);
        expect(mockUserRepo_1.mockRepo.create).not.toBeCalled();
        expect(mockUserRepo_1.mockRepo.checkExist).toBeCalled();
        expect(response).not.toBeNull();
        expect(response.err).toBeTruthy();
    });
    it('get user successfully', () => {
        const service = (0, userService_1.userService)({ userRepository: mockUserRepo_1.mockRepo });
        const response = service.getUser(mockUserRepo_1.testUser.userId);
        expect(mockUserRepo_1.mockRepo.get).toBeCalled();
        expect(response.user).toEqual(mockUserRepo_1.testUser);
    });
    it('get user failure', () => {
        const service = (0, userService_1.userService)({ userRepository: mockUserRepo_1.mockRepo });
        const response = service.getUser('unknown');
        expect(mockUserRepo_1.mockRepo.get).toBeCalled();
        expect(response.err).not.toBeNull();
        expect(response.user).toBeNull();
    });
    it('delete user', () => {
        const service = (0, userService_1.userService)({ userRepository: mockUserRepo_1.mockRepo });
        const response = service.deleteUser(mockUserRepo_1.testUser.userId);
        expect(mockUserRepo_1.mockRepo.delete).toBeCalled();
        expect(response.err).toBeFalsy();
    });
    it('delete user', () => {
        const service = (0, userService_1.userService)({ userRepository: mockUserRepo_1.mockRepo });
        const response = service.deleteUser('unknown');
        expect(mockUserRepo_1.mockRepo.delete).toBeCalled();
        expect(response.err).toBeTruthy();
    });
});
