import { userRepository } from '../domain/repositories';
export declare type UserServiceArgs = {
    userRepository: userRepository.UserRepository;
};
export declare type CreateCommand = {
    userId: string;
};
export declare type CreateDTO = {
    status: number;
};
export declare const service: ({ userRepository }: UserServiceArgs) => {
    create: (command: CreateCommand) => CreateDTO;
};
//# sourceMappingURL=userAppService.d.ts.map