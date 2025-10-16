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
var BookingForm_vue_1 = require("../components/booking/BookingForm.vue");
var PriceSummary_vue_1 = require("../components/booking/PriceSummary.vue");
var bookingFormRef = (0, vue_1.ref)(null);
var formData = (0, vue_1.computed)(function () {
    var _a;
    return (((_a = bookingFormRef.value) === null || _a === void 0 ? void 0 : _a.formData) || {
        destinationId: "",
        startDate: "",
        endDate: "",
        adults: 1,
        children: 0,
        infants: 0,
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "bg-gray-50 py-12 px-4" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "container mx-auto" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "grid grid-cols-1 lg:grid-cols-3 gap-8" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "lg:col-span-2" }));
/** @type {[typeof BookingForm, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(BookingForm_vue_1.default, new BookingForm_vue_1.default({
    ref: "bookingFormRef",
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        ref: "bookingFormRef",
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {typeof __VLS_ctx.bookingFormRef} */ ;
var __VLS_3 = {};
// @ts-ignore
[bookingFormRef,];
var __VLS_2;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "lg:col-span-1" }));
/** @type {[typeof PriceSummary, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(PriceSummary_vue_1.default, new PriceSummary_vue_1.default({
    destinationId: (__VLS_ctx.formData.destinationId),
    startDate: (__VLS_ctx.formData.startDate),
    endDate: (__VLS_ctx.formData.endDate),
    adults: (__VLS_ctx.formData.adults),
    children: (__VLS_ctx.formData.children),
    infants: (__VLS_ctx.formData.infants),
}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
        destinationId: (__VLS_ctx.formData.destinationId),
        startDate: (__VLS_ctx.formData.startDate),
        endDate: (__VLS_ctx.formData.endDate),
        adults: (__VLS_ctx.formData.adults),
        children: (__VLS_ctx.formData.children),
        infants: (__VLS_ctx.formData.infants),
    }], __VLS_functionalComponentArgsRest(__VLS_6), false));
// @ts-ignore
[formData, formData, formData, formData, formData, formData,];
/** @type {__VLS_StyleScopedClasses['bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:grid-cols-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:col-span-2']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:col-span-1']} */ ;
// @ts-ignore
var __VLS_4 = __VLS_3;
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
