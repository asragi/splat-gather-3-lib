export const testUser = {
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
export const mockRepo = {
    create: mockCreate,
    get: mockGet,
    checkExist: mockCheck,
    update: mockUpdate,
    delete: mockDelete,
};
