"use strict";
/* placeholder */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var DestinationSelector_vue_1 = require("./DestinationSelector.vue");
var DatePicker_vue_1 = require("./DatePicker.vue");
var GuestSelector_vue_1 = require("./GuestSelector.vue");
var booking_1 = require("../../stores/booking");
var bookingStore = (0, booking_1.useBookingStore)();
var isSubmitting = (0, vue_1.ref)(false);
var today = new Date().toISOString().split("T")[0];
var formData = (0, vue_1.reactive)({
    destinationId: "",
    startDate: "",
    endDate: "",
    adults: 1,
    children: 0,
    infants: 0,
    name: "",
    email: "",
    phone: "",
    specialRequest: "",
    hotelLevel: undefined,
    roomType: "",
    couponCode: "",
});
var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                isSubmitting.value = true;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, 4, 5]);
                // 这里可以添加实际的API调用
                bookingStore.setBookingInfo(formData);
                // 模拟API调用
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1500); })];
            case 2:
                // 模拟API调用
                _a.sent();
                alert("预订成功！我们会尽快与您联系。");
                // 重置表单
                Object.assign(formData, {
                    destinationId: "",
                    startDate: "",
                    endDate: "",
                    adults: 1,
                    children: 0,
                    infants: 0,
                    name: "",
                    email: "",
                    phone: "",
                    specialRequest: "",
                    hotelLevel: undefined,
                    roomType: "",
                    couponCode: "",
                });
                return [3 /*break*/, 5];
            case 3:
                error_1 = _a.sent();
                alert("预订失败，请稍后再试。");
                console.error(error_1);
                return [3 /*break*/, 5];
            case 4:
                isSubmitting.value = false;
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
var __VLS_exposed = {
    formData: formData,
};
defineExpose(__VLS_exposed);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "bg-white p-8 rounded-lg shadow-lg" }));
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)(__assign({ class: "text-3xl font-bold mb-6 text-gray-800" }));
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)(__assign({ onSubmit: (__VLS_ctx.handleSubmit) }));
// @ts-ignore
[handleSubmit,];
/** @type {[typeof DestinationSelector, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(DestinationSelector_vue_1.default, new DestinationSelector_vue_1.default({
    modelValue: (__VLS_ctx.formData.destinationId),
    label: "选择目的地",
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.formData.destinationId),
        label: "选择目的地",
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
// @ts-ignore
[formData,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "grid grid-cols-1 md:grid-cols-2 gap-4" }));
/** @type {[typeof DatePicker, ]} */ ;
// @ts-ignore
var __VLS_4 = __VLS_asFunctionalComponent(DatePicker_vue_1.default, new DatePicker_vue_1.default({
    modelValue: (__VLS_ctx.formData.startDate),
    label: "出发日期",
    minDate: (__VLS_ctx.today),
}));
var __VLS_5 = __VLS_4.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.formData.startDate),
        label: "出发日期",
        minDate: (__VLS_ctx.today),
    }], __VLS_functionalComponentArgsRest(__VLS_4), false));
// @ts-ignore
[formData, today,];
/** @type {[typeof DatePicker, ]} */ ;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent(DatePicker_vue_1.default, new DatePicker_vue_1.default({
    modelValue: (__VLS_ctx.formData.endDate),
    label: "返回日期",
    minDate: (__VLS_ctx.formData.startDate || __VLS_ctx.today),
}));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.formData.endDate),
        label: "返回日期",
        minDate: (__VLS_ctx.formData.startDate || __VLS_ctx.today),
    }], __VLS_functionalComponentArgsRest(__VLS_8), false));
// @ts-ignore
[formData, formData, today,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "mb-6" }));
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)(__assign({ class: "text-xl font-semibold mb-4 text-gray-700" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "grid grid-cols-1 md:grid-cols-3 gap-4" }));
/** @type {[typeof GuestSelector, ]} */ ;
// @ts-ignore
var __VLS_12 = __VLS_asFunctionalComponent(GuestSelector_vue_1.default, new GuestSelector_vue_1.default({
    modelValue: (__VLS_ctx.formData.adults),
    label: "成人",
    min: (1),
}));
var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.formData.adults),
        label: "成人",
        min: (1),
    }], __VLS_functionalComponentArgsRest(__VLS_12), false));
// @ts-ignore
[formData,];
/** @type {[typeof GuestSelector, ]} */ ;
// @ts-ignore
var __VLS_16 = __VLS_asFunctionalComponent(GuestSelector_vue_1.default, new GuestSelector_vue_1.default({
    modelValue: (__VLS_ctx.formData.children),
    label: "儿童",
    min: (0),
}));
var __VLS_17 = __VLS_16.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.formData.children),
        label: "儿童",
        min: (0),
    }], __VLS_functionalComponentArgsRest(__VLS_16), false));
// @ts-ignore
[formData,];
/** @type {[typeof GuestSelector, ]} */ ;
// @ts-ignore
var __VLS_20 = __VLS_asFunctionalComponent(GuestSelector_vue_1.default, new GuestSelector_vue_1.default({
    modelValue: (__VLS_ctx.formData.infants),
    label: "婴儿",
    min: (0),
}));
var __VLS_21 = __VLS_20.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.formData.infants),
        label: "婴儿",
        min: (0),
    }], __VLS_functionalComponentArgsRest(__VLS_20), false));
// @ts-ignore
[formData,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "mb-6" }));
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)(__assign({ class: "text-xl font-semibold mb-4 text-gray-700" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "grid grid-cols-1 gap-4" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)(__assign({ class: "block text-gray-700 font-semibold mb-2" }));
__VLS_asFunctionalElement(__VLS_elements.input)(__assign(__assign({ value: (__VLS_ctx.formData.name), type: "text", required: true }, { class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue" }), { placeholder: "请输入您的姓名" }));
// @ts-ignore
[formData,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)(__assign({ class: "block text-gray-700 font-semibold mb-2" }));
__VLS_asFunctionalElement(__VLS_elements.input)(__assign(__assign({ type: "email", required: true }, { class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue" }), { placeholder: "your@email.com" }));
(__VLS_ctx.formData.email);
// @ts-ignore
[formData,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)(__assign({ class: "block text-gray-700 font-semibold mb-2" }));
__VLS_asFunctionalElement(__VLS_elements.input)(__assign(__assign({ type: "tel", required: true }, { class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue" }), { placeholder: "请输入您的电话号码" }));
(__VLS_ctx.formData.phone);
// @ts-ignore
[formData,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)(__assign({ class: "block text-gray-700 font-semibold mb-2" }));
__VLS_asFunctionalElement(__VLS_elements.textarea, __VLS_elements.textarea)(__assign(__assign({ value: (__VLS_ctx.formData.specialRequest), rows: "3" }, { class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue" }), { placeholder: "请告诉我们您的特殊需求" }));
// @ts-ignore
[formData,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "mb-6" }));
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)(__assign({ class: "text-xl font-semibold mb-4 text-gray-700" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "grid grid-cols-1 md:grid-cols-2 gap-4" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)(__assign({ class: "block text-gray-700 font-semibold mb-2" }));
__VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)(__assign({ value: (__VLS_ctx.formData.hotelLevel) }, { class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue" }));
// @ts-ignore
[formData,];
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "",
});
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "3",
});
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "4",
});
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "5",
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)(__assign({ class: "block text-gray-700 font-semibold mb-2" }));
__VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)(__assign({ value: (__VLS_ctx.formData.roomType) }, { class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue" }));
// @ts-ignore
[formData,];
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "",
});
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "standard",
});
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "deluxe",
});
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "suite",
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "mb-6" }));
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)(__assign({ class: "block text-gray-700 font-semibold mb-2" }));
__VLS_asFunctionalElement(__VLS_elements.input)(__assign(__assign({ value: (__VLS_ctx.formData.couponCode), type: "text" }, { class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue" }), { placeholder: "请输入优惠码" }));
// @ts-ignore
[formData,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)(__assign({ type: "submit", disabled: (__VLS_ctx.isSubmitting) }, { class: "w-full bg-primary-green hover:bg-primary-green-dark text-white font-bold py-3 rounded-lg transition disabled:opacity-50" }));
// @ts-ignore
[isSubmitting,];
(__VLS_ctx.isSubmitting ? "提交中..." : "确认预订");
// @ts-ignore
[isSubmitting,];
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-primary-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-primary-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-primary-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-primary-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-primary-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-primary-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-primary-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary-green']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-primary-green-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled:opacity-50']} */ ;
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return (__VLS_exposed); },
});
exports.default = {};
