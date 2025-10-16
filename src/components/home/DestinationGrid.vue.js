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
var DestinationCard_vue_1 = require("./DestinationCard.vue");
var destinations_1 = require("../../stores/destinations");
var destinationsStore = (0, destinations_1.useDestinationsStore)();
var destinations = (0, vue_1.ref)([
    {
        id: "1",
        name: "巴厘岛",
        description: "热带天堂，美丽的海滩和文化遗产",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400",
        price: 3999,
    },
    {
        id: "2",
        name: "东京",
        description: "现代与传统完美融合的国际都市",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400",
        price: 4599,
    },
    {
        id: "3",
        name: "巴黎",
        description: "浪漫之都，艺术与美食的天堂",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400",
        price: 6999,
    },
    {
        id: "4",
        name: "马尔代夫",
        description: "梦幻海岛，蔚蓝海水和白色沙滩",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400",
        price: 8999,
    },
]);
(0, vue_1.onMounted)(function () {
    destinationsStore.setDestinations(destinations.value);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)(__assign({ class: "py-12 px-4 bg-gray-50" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "container mx-auto" }));
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)(__assign({ class: "text-3xl font-bold text-center mb-8 text-gray-800" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.destinations)); _i < _a.length; _i++) {
    var destination = _a[_i][0];
    // @ts-ignore
    [destinations,];
    /** @type {[typeof DestinationCard, ]} */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(DestinationCard_vue_1.default, new DestinationCard_vue_1.default({
        key: (destination.id),
        destination: (destination),
    }));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
            key: (destination.id),
            destination: (destination),
        }], __VLS_functionalComponentArgsRest(__VLS_0), false));
}
/** @type {__VLS_StyleScopedClasses['py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:grid-cols-4']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-6']} */ ;
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
