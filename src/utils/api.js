"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
// API 请求工具（可根据实际情况扩展）
var axios_1 = require("axios");
exports.api = axios_1.default.create({
    baseURL: "/api",
});
