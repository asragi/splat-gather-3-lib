import { Err } from '../errors/error';
import { User } from '../models/user';
import { UserId } from '../models/userId';
import { userRepository } from '../repositories';
declare type Args = {
    userRepository: userRepository.UserRepository;
};
declare type CreateUserResponse = {
    err: Err | null;
};
declare type GetUserResponse = {
    err: Err | null;
    user: User | null;
};
export declare const userService: ({ userRepository }: Args) => {
    createUser: (user: User) => CreateUserResponse;
    getUser: (userId: UserId) => GetUserResponse;
    deleteUser: (userId: UserId) => userRepository.DeleteResult;
};
export {};
//# sourceMappingURL=userService.d.ts.map