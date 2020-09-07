"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app/app"));
var routes_1 = require("./app/routes");
var config_1 = require("./app/config/config");
var app = new app_1.default(routes_1.Routes, config_1.Port);
app.listen();
//# sourceMappingURL=index.js.map