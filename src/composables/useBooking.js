"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBooking = useBooking;
var vue_1 = require("vue");
function useBooking() {
    var booking = (0, vue_1.ref)({});
    return { booking: booking };
}
