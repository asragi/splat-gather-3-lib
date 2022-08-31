import { userRepository } from './domain/repositories';
import { UserAppService } from './application';
export { userRepository, UserAppService };
export const hello = () => {
    console.log('Hello.');
};
