import { userService } from './userService';
const testUser = {
    userId: 'Test',
};
const testError = {
    message: 'TestError',
    innerError: null,
};
const mockCreate = jest.fn((_user) => {
    if (_user.userId === testUser.userId)
        return {
            err: testError,
        };
    return {
        err: null,
    };
});
const mockUpdate = jest.fn((user) => ({
    err: null,
}));
const mockGet = jest.fn((userId) => {
    if (userId === testUser.userId)
        return {
            err: null,
            user: testUser,
        };
    return {
        err: testError,
        user: null,
    };
});
const mockCheck = jest.fn((userId) => {
    if (userId === testUser.userId)
        return {
            err: null,
            isExist: true,
        };
    return {
        err: null,
        isExist: false,
    };
});
const mockDelete = jest.fn((userId) => {
    if (userId === testUser.userId)
        return {
            err: null,
        };
    return {
        err: testError,
    };
});
const mockRepo = {
    create: mockCreate,
    get: mockGet,
    checkExist: mockCheck,
    update: mockUpdate,
    delete: mockDelete,
};
describe('test user create', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('create user success', () => {
        const service = userService({ userRepository: mockRepo });
        const user = {
            userId: 'Test2',
        };
        const response = service.createUser(user);
        expect(mockCreate).toBeCalled();
        expect(mockCheck).toBeCalled();
        expect(response).not.toBeNull();
        expect(response.err).toBeFalsy();
    });
    it('create user failure', () => {
        const service = userService({ userRepository: mockRepo });
        const user = {
            userId: 'Test',
        };
        const response = service.createUser(user);
        expect(mockCreate).not.toBeCalled();
        expect(mockCheck).toBeCalled();
        expect(response).not.toBeNull();
        expect(response.err).toBeTruthy();
    });
    it('get user successfully', () => {
        const service = userService({ userRepository: mockRepo });
        const response = service.getUser(testUser.userId);
        expect(mockGet).toBeCalled();
        expect(response.user).toEqual(testUser);
    });
    it('get user failure', () => {
        const service = userService({ userRepository: mockRepo });
        const response = service.getUser('unknown');
        expect(mockGet).toBeCalled();
        expect(response.err).not.toBeNull();
        expect(response.user).toBeNull();
    });
    it('delete user', () => {
        const service = userService({ userRepository: mockRepo });
        const response = service.deleteUser(testUser.userId);
        expect(mockDelete).toBeCalled();
        expect(response.err).toBeFalsy();
    });
    it('delete user', () => {
        const service = userService({ userRepository: mockRepo });
        const response = service.deleteUser('unknown');
        expect(mockDelete).toBeCalled();
        expect(response.err).toBeTruthy();
    });
});
