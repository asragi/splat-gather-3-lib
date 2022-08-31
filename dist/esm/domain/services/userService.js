export const userService = ({ userRepository }) => {
    const createUser = (user) => {
        const { err, isExist } = isUserExist(user.userId);
        if (err != null) {
            return {
                err: {
                    message: 'InternalErrorOccurred',
                    innerError: err,
                },
            };
        }
        if (isExist) {
            return {
                err: {
                    message: 'UserAlreadyExists',
                    innerError: null,
                },
            };
        }
        const result = userRepository.create(user);
        if (result.err != null) {
            return {
                err: {
                    message: 'CreateUserError',
                    innerError: result.err,
                },
            };
        }
        return { err: null };
    };
    const getUser = (userId) => {
        const { err, user } = userRepository.get(userId);
        if (err != null) {
            return {
                err: {
                    message: 'GetUserError',
                    innerError: err,
                },
                user: null,
            };
        }
        return {
            err: null,
            user,
        };
    };
    const deleteUser = (userId) => {
        return userRepository.delete(userId);
    };
    const isUserExist = (userId) => {
        const { err, isExist } = userRepository.checkExist(userId);
        return {
            err,
            isExist,
        };
    };
    return { createUser, getUser, deleteUser };
};
