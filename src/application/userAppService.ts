import { User } from '../domain/models/user';
import { userRepository } from '../domain/repositories';
import { userService as userDomainService } from '../domain/services/userService';
import { StatusCreated, StatusInternalServerError } from './lib/status';

export type UserServiceArgs = {
  userRepository: userRepository.UserRepository;
};

export type CreateCommand = {
  userId: string;
};

export type CreateDTO = {
  status: number;
};

export const service = ({ userRepository }: UserServiceArgs) => {
  const userService = userDomainService({ userRepository });
  const create = (command: CreateCommand): CreateDTO => {
    const user: User = {
      userId: command.userId,
    };
    const result = userService.createUser(user);
    const status =
      result.err == null ? StatusCreated : StatusInternalServerError;
    return { status };
  };

  return {
    create,
  };
};
