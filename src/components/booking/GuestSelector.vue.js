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
var props = defineProps();
var emit = defineEmits();
var increment = function () {
    var maxVal = props.max || 99;
    if (props.modelValue < maxVal) {
        emit("update:modelValue", props.modelValue + 1);
    }
};
var decrement = function () {
    var minVal = props.min || 0;
    if (props.modelValue > minVal) {
        emit("update:modelValue", props.modelValue - 1);
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = __assign(__assign(__assign(__assign(__assign({}, {}), {}), {}), {}), {});
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "mb-4" }));
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)(__assign({ class: "block text-gray-700 font-semibold mb-2" }));
(__VLS_ctx.label);
// @ts-ignore
[label,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "flex items-center gap-4" }));
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)(__assign(__assign({ onClick: (__VLS_ctx.decrement) }, { disabled: (__VLS_ctx.modelValue <= __VLS_ctx.min) }), { class: "w-10 h-10 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 rounded-lg font-bold" }));
// @ts-ignore
[decrement, modelValue, min,];
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)(__assign({ class: "text-xl font-semibold w-12 text-center" }));
(__VLS_ctx.modelValue);
// @ts-ignore
[modelValue,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)(__assign(__assign({ onClick: (__VLS_ctx.increment) }, { disabled: (__VLS_ctx.modelValue >= __VLS_ctx.max) }), { class: "w-10 h-10 bg-primary-blue hover:bg-primary-blue-dark text-white rounded-lg font-bold" }));
// @ts-ignore
[modelValue, increment, max,];
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-10']} */ ;
/** @type {__VLS_StyleScopedClasses['h-10']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled:opacity-50']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['w-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-10']} */ ;
/** @type {__VLS_StyleScopedClasses['h-10']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-primary-blue-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
exports.default = {};
