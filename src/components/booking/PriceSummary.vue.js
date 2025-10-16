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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var destinations_1 = require("../../stores/destinations");
var props = defineProps();
var destinationsStore = (0, destinations_1.useDestinationsStore)();
var destinationName = (0, vue_1.computed)(function () {
    var dest = destinationsStore.destinations.find(function (d) { return d.id === props.destinationId; });
    return (dest === null || dest === void 0 ? void 0 : dest.name) || "";
});
var basePrice = (0, vue_1.computed)(function () {
    var dest = destinationsStore.destinations.find(function (d) { return d.id === props.destinationId; });
    return (dest === null || dest === void 0 ? void 0 : dest.price) || 0;
});
var totalGuests = (0, vue_1.computed)(function () { return props.adults + props.children + props.infants; });
var guestsCost = (0, vue_1.computed)(function () {
    return props.adults * 1000 + props.children * 500 + props.infants * 100;
});
var totalPrice = (0, vue_1.computed)(function () {
    return basePrice.value + guestsCost.value;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "bg-white p-6 rounded-lg shadow-lg sticky top-4" }));
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)(__assign({ class: "text-2xl font-bold mb-4 text-gray-800" }));
if (__VLS_ctx.destinationName) {
    // @ts-ignore
    [destinationName,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "mb-4" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "text-gray-600" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "font-semibold text-lg" }));
    (__VLS_ctx.destinationName);
    // @ts-ignore
    [destinationName,];
}
if (__VLS_ctx.startDate) {
    // @ts-ignore
    [startDate,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "mb-4" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "text-gray-600" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "font-semibold" }));
    (__VLS_ctx.startDate);
    // @ts-ignore
    [startDate,];
}
if (__VLS_ctx.endDate) {
    // @ts-ignore
    [endDate,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "mb-4" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "text-gray-600" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "font-semibold" }));
    (__VLS_ctx.endDate);
    // @ts-ignore
    [endDate,];
}
if (__VLS_ctx.totalGuests > 0) {
    // @ts-ignore
    [totalGuests,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "mb-4" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "text-gray-600" }));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "font-semibold" }));
    (__VLS_ctx.adults);
    (__VLS_ctx.children);
    (__VLS_ctx.infants);
    // @ts-ignore
    [adults, children, infants,];
}
__VLS_asFunctionalElement(__VLS_elements.hr)(__assign({ class: "my-4" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "flex justify-between items-center mb-4" }));
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "text-gray-600" }));
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "font-semibold" }));
(__VLS_ctx.basePrice);
// @ts-ignore
[basePrice,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "flex justify-between items-center mb-4" }));
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "text-gray-600" }));
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "font-semibold" }));
(__VLS_ctx.guestsCost);
// @ts-ignore
[guestsCost,];
__VLS_asFunctionalElement(__VLS_elements.hr)(__assign({ class: "my-4" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "flex justify-between items-center text-xl font-bold text-primary-green" }));
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
(__VLS_ctx.totalPrice);
// @ts-ignore
[totalPrice,];
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['sticky']} */ ;
/** @type {__VLS_StyleScopedClasses['top-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['my-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['my-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary-green']} */ ;
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeProps: {},
});
exports.default = {};
