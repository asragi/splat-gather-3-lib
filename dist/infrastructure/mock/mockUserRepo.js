"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockRepo = exports.testUser = void 0;
exports.testUser = {
    userId: 'Test',
};
const testError = {
    message: 'TestError',
    innerError: null,
};
const mockCreate = jest.fn((_user) => {
    if (_user.userId === exports.testUser.userId)
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
    if (userId === exports.testUser.userId)
        return {
            err: null,
            user: exports.testUser,
        };
    return {
        err: testError,
        user: null,
    };
});
const mockCheck = jest.fn((userId) => {
    if (userId === exports.testUser.userId)
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
    if (userId === exports.testUser.userId)
        return {
            err: null,
        };
    return {
        err: testError,
    };
});
exports.mockRepo = {
    create: mockCreate,
    get: mockGet,
    checkExist: mockCheck,
    update: mockUpdate,
    delete: mockDelete,
};
