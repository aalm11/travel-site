"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = isEmail;
// 表单验证工具函数
function isEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
