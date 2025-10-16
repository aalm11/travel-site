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
var HeroSection_vue_1 = require("../components/home/HeroSection.vue");
var DestinationGrid_vue_1 = require("../components/home/DestinationGrid.vue");
var FeaturesSection_vue_1 = require("../components/home/FeaturesSection.vue");
var TestimonialsSection_vue_1 = require("../components/home/TestimonialsSection.vue");
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
/** @type {[typeof HeroSection, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(HeroSection_vue_1.default, new HeroSection_vue_1.default({}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof DestinationGrid, ]} */ ;
// @ts-ignore
var __VLS_4 = __VLS_asFunctionalComponent(DestinationGrid_vue_1.default, new DestinationGrid_vue_1.default({}));
var __VLS_5 = __VLS_4.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_4), false));
/** @type {[typeof FeaturesSection, ]} */ ;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent(FeaturesSection_vue_1.default, new FeaturesSection_vue_1.default({}));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_8), false));
/** @type {[typeof TestimonialsSection, ]} */ ;
// @ts-ignore
var __VLS_12 = __VLS_asFunctionalComponent(TestimonialsSection_vue_1.default, new TestimonialsSection_vue_1.default({}));
var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_12), false));
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
