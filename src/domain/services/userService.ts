import { Err } from '../errors/error';
import { User } from '../models/user';
import { UserId } from '../models/userId';
import { UserRepository } from '../repositories/user';

type Args = {
  userRepository: UserRepository;
};

type CreateUserResponse = {
  err: Err | null;
};

type GetUserResponse = {
  err: Err | null;
  user: User | null;
};

export const userService = ({ userRepository }: Args) => {
  const createUser = (user: User): CreateUserResponse => {
    const { err, isExist } = isUserExist(user.userId);
    if (err != null) {
      return {
        err: {
          message: 'InternalErrorOccurred',
          innerError: err,
        },
      };
    }

    if (isExist) {
      return {
        err: {
          message: 'UserAlreadyExists',
          innerError: null,
        },
      };
    }
    const result = userRepository.create(user);
    if (result.err != null) {
      return {
        err: {
          message: 'CreateUserError',
          innerError: result.err,
        },
      };
    }
    return { err: null };
  };

  const getUser = (userId: UserId): GetUserResponse => {
    const { err, user } = userRepository.get(userId);
    if (err != null) {
      return {
        err: {
          message: 'GetUserError',
          innerError: err,
        },
        user: null,
      };
    }
    return {
      err: null,
      user,
    };
  };

  const deleteUser = (userId: UserId) => {
    return userRepository.delete(userId);
  };

  const isUserExist = (userId: UserId) => {
    const { err, isExist } = userRepository.checkExist(userId);
    return {
      err,
      isExist,
    };
  };

  return { createUser, getUser, deleteUser };
};
