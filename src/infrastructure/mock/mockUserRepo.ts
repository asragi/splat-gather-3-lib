import { userRepository } from '../..';
import { Err } from '../../domain/errors/error';
import { User } from '../../domain/models/user';
import { UserId } from '../../domain/models/userId';

export const testUser: User = {
  userId: 'Test',
};

const testError: Err = {
  message: 'TestError',
  innerError: null,
};

const mockCreate = jest.fn((_user: User): userRepository.CreateResult => {
  if (_user.userId === testUser.userId)
    return {
      err: testError,
    };
  return {
    err: null,
  };
});

const mockUpdate = jest.fn(
  (user: User): userRepository.UpdateResult => ({
    err: null,
  })
);

const mockGet = jest.fn((userId: UserId): userRepository.GetResult => {
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

const mockCheck = jest.fn((userId: UserId): userRepository.CheckResult => {
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

const mockDelete = jest.fn((userId: UserId): userRepository.DeleteResult => {
  if (userId === testUser.userId)
    return {
      err: null,
    };
  return {
    err: testError,
  };
});

export const mockRepo: userRepository.UserRepository = {
  create: mockCreate,
  get: mockGet,
  checkExist: mockCheck,
  update: mockUpdate,
  delete: mockDelete,
};
