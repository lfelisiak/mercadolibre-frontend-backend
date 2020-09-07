import { ItemsController } from "./controllers/ItemsController";
export const Routes = [
    {
        method: "get",
        prefix: "/api",
        route: "/items",
        controller: ItemsController,
        action: "index",
    },
    {
        method: "get",
        prefix: "/api",
        route: "/items/:id",
        controller: ItemsController,
        action: "get",
    }
];
//# sourceMappingURL=routes.js.map