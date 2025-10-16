"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDestinations = useDestinations;
var vue_1 = require("vue");
function useDestinations() {
    var destinations = (0, vue_1.ref)([]);
    return { destinations: destinations };
}
