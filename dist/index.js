"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = exports.UserAppService = exports.userRepository = void 0;
const repositories_1 = require("./domain/repositories");
Object.defineProperty(exports, "userRepository", { enumerable: true, get: function () { return repositories_1.userRepository; } });
const application_1 = require("./application");
Object.defineProperty(exports, "UserAppService", { enumerable: true, get: function () { return application_1.UserAppService; } });
const hello = () => {
    console.log('Hello.');
};
exports.hello = hello;
