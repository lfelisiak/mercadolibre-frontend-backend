"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var ItemsController_1 = require("./controllers/ItemsController");
exports.Routes = [
    {
        method: "get",
        prefix: "/api",
        route: "/items",
        controller: ItemsController_1.ItemsController,
        action: "index",
    },
    {
        method: "get",
        prefix: "/api",
        route: "/items/:id",
        controller: ItemsController_1.ItemsController,
        action: "get",
    }
];
//# sourceMappingURL=routes.js.map