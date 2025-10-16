"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPrice = formatPrice;
// 格式化工具函数
function formatPrice(price) {
    return "\uFFE5".concat(price.toFixed(2));
}
