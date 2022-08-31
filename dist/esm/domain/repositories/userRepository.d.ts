import { Err } from '../errors/error';
import { User } from '../models/user';
import { UserId } from '../models/userId';
export declare type CreateResult = {
    err: Err | null;
};
export declare type UpdateResult = {
    err: Err | null;
};
export declare type GetResult = {
    err: Err | null;
    user: User | null;
};
export declare type CheckResult = {
    err: Err | null;
    isExist: boolean;
};
export declare type DeleteResult = {
    err: Err | null;
};
export declare type UserRepository = {
    create: (user: User) => CreateResult;
    get: (userId: UserId) => GetResult;
    checkExist: (userId: UserId) => CheckResult;
    update: (user: User) => UpdateResult;
    delete: (userId: UserId) => DeleteResult;
};
//# sourceMappingURL=userRepository.d.ts.map