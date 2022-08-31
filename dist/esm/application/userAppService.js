import { userService as userDomainService } from '../domain/services/userService';
import { StatusCreated, StatusInternalServerError } from './lib/status';
export const service = ({ userRepository }) => {
    const userService = userDomainService({ userRepository });
    const create = (command) => {
        const user = {
            userId: command.userId,
        };
        const result = userService.createUser(user);
        const status = result.err == null ? StatusCreated : StatusInternalServerError;
        return { status };
    };
    return {
        create,
    };
};
