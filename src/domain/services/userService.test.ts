import { Err } from '../errors/error';
import { User } from '../models/user';
import { UserId } from '../models/userId';
import {
  CheckResult,
  CreateResult,
  DeleteResult,
  GetResult,
  UpdateResult,
  UserRepository,
} from '../repositories/user';
import { userService } from './userService';

const testUser: User = {
  userId: 'Test',
};

const testError: Err = {
  message: 'TestError',
  innerError: null,
};

const mockCreate = jest.fn((_user: User): CreateResult => {
  if (_user.userId === testUser.userId)
    return {
      err: testError,
    };
  return {
    err: null,
  };
});

const mockUpdate = jest.fn(
  (user: User): UpdateResult => ({
    err: null,
  })
);

const mockGet = jest.fn((userId: UserId): GetResult => {
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

const mockCheck = jest.fn((userId: UserId): CheckResult => {
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

const mockDelete = jest.fn((userId: UserId): DeleteResult => {
  if (userId === testUser.userId)
    return {
      err: null,
    };
  return {
    err: testError,
  };
});

const mockRepo: UserRepository = {
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
    const user: User = {
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
    const user: User = {
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
