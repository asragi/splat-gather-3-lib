import { User } from '../models/user';
import { UserId } from '../models/userId';
import {
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

const mockCreate = jest.fn((_user: User): CreateResult => {
  if (_user.userId === testUser.userId)
    return {
      wasSuccess: false,
    };
  return {
    wasSuccess: true,
  };
});

const mockUpdate = jest.fn(
  (user: User): UpdateResult => ({
    wasSuccess: true,
  })
);

const mockGet = jest.fn((userId: UserId): GetResult => {
  if (userId === testUser.userId)
    return {
      wasSuccess: true,
      user: testUser,
    };
  return {
    wasSuccess: true,
    user: null,
  };
});

const mockDelete = jest.fn((userId: UserId): DeleteResult => {
  if (userId === testUser.userId)
    return {
      wasSuccess: true,
    };
  return {
    wasSuccess: false,
  };
});

const mockRepo: UserRepository = {
  create: mockCreate,
  get: mockGet,
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
    expect(mockGet).toBeCalled();
    expect(response).not.toBeNull();
    expect(response?.wasSuccess).toBeTruthy();
  });

  it('create user failure', () => {
    const service = userService({ userRepository: mockRepo });
    const user: User = {
      userId: 'Test',
    };
    const response = service.createUser(user);
    expect(mockCreate).not.toBeCalled();
    expect(mockGet).toBeCalled();
    expect(response).not.toBeNull();
    expect(response.wasSuccess).toBeFalsy();
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
    expect(response.wasSuccess).toBeTruthy();
    expect(response.user).toBeNull();
  });

  it('delete user', () => {
    const service = userService({ userRepository: mockRepo });
    const response = service.deleteUser(testUser.userId);
    expect(mockDelete).toBeCalled();
    expect(response.wasSuccess).toBeTruthy();
  });

  it('delete user', () => {
    const service = userService({ userRepository: mockRepo });
    const response = service.deleteUser('unknown');
    expect(mockDelete).toBeCalled();
    expect(response.wasSuccess).toBeFalsy();
  });
});
