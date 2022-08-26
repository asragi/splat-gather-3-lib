import { User } from '../models/user';
import { UserId } from '../models/userId';
import { UserRepository } from '../repositories/user';

type Args = {
  userRepository: UserRepository;
};

type CreateUserResponse = {
  wasSuccess: boolean;
};

type GetUserResponse = {
  wasSuccess: boolean;
  user: User | null;
};

export const userService = ({ userRepository }: Args) => {
  const createUser = (user: User): CreateUserResponse => {
    if (isUserExist(user.userId)) {
      return {
        wasSuccess: false,
      };
    }
    return userRepository.create(user);
  };
  const getUser = (userId: UserId): GetUserResponse => {
    const res = userRepository.get(userId);
    if (!res.wasSuccess) {
      return {
        wasSuccess: true,
        user: null,
      };
    }
    return {
      wasSuccess: true,
      user: res.user,
    };
  };
  const deleteUser = (userId: UserId) => {
    return userRepository.delete(userId);
  };

  const isUserExist = (userId: UserId) => {
    const res = userRepository.get(userId);
    return !!res.user;
  };

  return { createUser, getUser, deleteUser };
};
