"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAppService = void 0;
const userService_1 = require("../domain/services/userService");
const status_1 = require("./lib/status");
const userAppService = ({ userRepository }) => {
    const userService = (0, userService_1.userService)({ userRepository });
    const create = (command) => {
        const user = {
            userId: command.userId,
        };
        const result = userService.createUser(user);
        const status = result.err == null ? status_1.StatusCreated : status_1.StatusInternalServerError;
        return { status };
    };
    return {
        create,
    };
};
exports.userAppService = userAppService;
