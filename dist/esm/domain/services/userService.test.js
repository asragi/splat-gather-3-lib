import { mockRepo, testUser } from '../../infrastructure/mock/mockUserRepo';
import { userService } from './userService';
describe('test user create', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('create user success', () => {
        const service = userService({ userRepository: mockRepo });
        const user = {
            userId: 'Test2',
        };
        const response = service.createUser(user);
        expect(mockRepo.create).toBeCalled();
        expect(mockRepo.checkExist).toBeCalled();
        expect(response).not.toBeNull();
        expect(response.err).toBeFalsy();
    });
    it('create user failure', () => {
        const service = userService({ userRepository: mockRepo });
        const user = {
            userId: 'Test',
        };
        const response = service.createUser(user);
        expect(mockRepo.create).not.toBeCalled();
        expect(mockRepo.checkExist).toBeCalled();
        expect(response).not.toBeNull();
        expect(response.err).toBeTruthy();
    });
    it('get user successfully', () => {
        const service = userService({ userRepository: mockRepo });
        const response = service.getUser(testUser.userId);
        expect(mockRepo.get).toBeCalled();
        expect(response.user).toEqual(testUser);
    });
    it('get user failure', () => {
        const service = userService({ userRepository: mockRepo });
        const response = service.getUser('unknown');
        expect(mockRepo.get).toBeCalled();
        expect(response.err).not.toBeNull();
        expect(response.user).toBeNull();
    });
    it('delete user', () => {
        const service = userService({ userRepository: mockRepo });
        const response = service.deleteUser(testUser.userId);
        expect(mockRepo.delete).toBeCalled();
        expect(response.err).toBeFalsy();
    });
    it('delete user', () => {
        const service = userService({ userRepository: mockRepo });
        const response = service.deleteUser('unknown');
        expect(mockRepo.delete).toBeCalled();
        expect(response.err).toBeTruthy();
    });
});
