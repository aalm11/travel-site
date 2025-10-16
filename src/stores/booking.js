"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBookingStore = void 0;
var pinia_1 = require("pinia");
exports.useBookingStore = (0, pinia_1.defineStore)("booking", {
    state: function () { return ({
        bookingInfo: {},
    }); },
    actions: {
        setBookingInfo: function (data) {
            this.bookingInfo = data;
        },
        clearBookingInfo: function () {
            this.bookingInfo = {};
        },
    },
});
