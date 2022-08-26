import { User } from '../../models/user';
import { UserId } from '../../models/userId';

export type CreateResult = {
  wasSuccess: boolean;
};

export type UpdateResult = {
  wasSuccess: boolean;
};

export type GetResult = {
  wasSuccess: boolean;
  user: User | null;
};

export type DeleteResult = {
  wasSuccess: boolean;
};

export type UserRepository = {
  create: (user: User) => CreateResult;
  get: (userId: UserId) => GetResult;
  update: (user: User) => UpdateResult;
  delete: (userId: UserId) => DeleteResult;
};
