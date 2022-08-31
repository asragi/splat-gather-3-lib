import { Err } from '../errors/error';
import { User } from '../models/user';
import { UserId } from '../models/userId';

export type CreateResult = {
  err: Err | null;
};

export type UpdateResult = {
  err: Err | null;
};

export type GetResult = {
  err: Err | null;
  user: User | null;
};

export type CheckResult = {
  err: Err | null;
  isExist: boolean;
};

export type DeleteResult = {
  err: Err | null;
};

export type UserRepository = {
  create: (user: User) => CreateResult;
  get: (userId: UserId) => GetResult;
  checkExist: (userId: UserId) => CheckResult;
  update: (user: User) => UpdateResult;
  delete: (userId: UserId) => DeleteResult;
};
