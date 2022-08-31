import { userRepository } from './domain/repositories';
import { UserAppService } from './application';

export { userRepository, UserAppService };

export const hello = (): void => {
  console.log('Hello.');
};
