"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDestinationsStore = void 0;
var pinia_1 = require("pinia");
exports.useDestinationsStore = (0, pinia_1.defineStore)("destinations", {
    state: function () { return ({
        destinations: [],
    }); },
    actions: {
        setDestinations: function (data) {
            this.destinations = data;
        },
    },
});
