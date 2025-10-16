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
var testimonials = [
    {
        name: "张小明",
        avatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        comment: "非常棒的旅行体验！导游专业，行程安排合理，强烈推荐！",
    },
    {
        name: "李华",
        avatar: "https://i.pravatar.cc/150?img=2",
        rating: 5,
        comment: "服务周到，价格实惠，下次旅行还会选择这里。",
    },
    {
        name: "王芳",
        avatar: "https://i.pravatar.cc/150?img=3",
        rating: 5,
        comment: "整个旅程都很愉快，客服响应及时，解决问题很快。",
    },
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)(__assign({ class: "py-12 px-4 bg-gradient-to-r from-primary-blue-light to-primary-green-light" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "container mx-auto" }));
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)(__assign({ class: "text-3xl font-bold text-center mb-12 text-gray-800" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "grid grid-cols-1 md:grid-cols-3 gap-8" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.testimonials)); _i < _a.length; _i++) {
    var testimonial = _a[_i][0];
    // @ts-ignore
    [testimonials,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ key: (testimonial.name) }, { class: "bg-white p-6 rounded-lg shadow-lg" }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "flex items-center mb-4" }));
    __VLS_asFunctionalElement(__VLS_elements.img)(__assign({ src: (testimonial.avatar), alt: (testimonial.name) }, { class: "w-12 h-12 rounded-full mr-4" }));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    __VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)(__assign({ class: "font-semibold text-gray-800" }));
    (testimonial.name);
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "text-yellow-500" }));
    ("⭐".repeat(testimonial.rating));
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "text-gray-600 italic" }));
    (testimonial.comment);
}
/** @type {__VLS_StyleScopedClasses['py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-to-r']} */ ;
/** @type {__VLS_StyleScopedClasses['from-primary-blue-light']} */ ;
/** @type {__VLS_StyleScopedClasses['to-primary-green-light']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-8']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-12']} */ ;
/** @type {__VLS_StyleScopedClasses['h-12']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['text-yellow-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['italic']} */ ;
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
