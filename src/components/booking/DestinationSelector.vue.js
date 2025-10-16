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
var emit = defineEmits();
var destinationsStore = (0, destinations_1.useDestinationsStore)();
var destinations = (0, vue_1.ref)(destinationsStore.destinations);
var selectedDestination = (0, vue_1.ref)(props.modelValue || "");
var handleChange = function () {
    emit("update:modelValue", selectedDestination.value);
};
(0, vue_1.onMounted)(function () {
    destinations.value = destinationsStore.destinations;
});
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
__VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)(__assign(__assign({ onChange: (__VLS_ctx.handleChange) }, { value: (__VLS_ctx.selectedDestination) }), { class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue" }));
// @ts-ignore
[handleChange, selectedDestination,];
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "",
});
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.destinations)); _i < _a.length; _i++) {
    var dest = _a[_i][0];
    // @ts-ignore
    [destinations,];
    __VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
        key: (dest.id),
        value: (dest.id),
    });
    (dest.name);
    (dest.price);
}
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
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
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
exports.default = {};
