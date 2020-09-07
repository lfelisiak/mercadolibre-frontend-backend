"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var config_1 = require("../config/config");
var MeliService = /** @class */ (function () {
    function MeliService() {
        this.httpClient = axios_1.default.create({ baseURL: config_1.Meli.baseUri });
    }
    MeliService.prototype.get = function (path, parameters, options) {
        return this.httpClient.get(path, { params: parameters });
    };
    MeliService.prototype.getCategoriesFromFilters = function (data) {
        var categories = data
            .find(function (filter) { return filter.id === "category"; })
            .values
            .shift()
            .path_from_root
            .map(function (category) { return category.name; });
        return categories;
    };
    MeliService.prototype.getItems = function (term, options) {
        return __awaiter(this, void 0, void 0, function () {
            var data, items, categories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get('sites/MLA/search', { q: term })];
                    case 1:
                        data = (_a.sent()).data;
                        items = data.results.length ? data.results.splice(0, options.take || 4) : [];
                        categories = data.filters.length ? this.getCategoriesFromFilters(data.filters) : [];
                        return [2 /*return*/, { items: items, categories: categories }];
                }
            });
        });
    };
    MeliService.prototype.getItemDescription = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var description, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        description = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.get("items/" + id + "/description")];
                    case 2:
                        result = (_a.sent()).data;
                        description = result.text ? result.text : result.plain_text;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Item does not have a Description", error_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, description];
                }
            });
        });
    };
    MeliService.prototype.getItemCategories = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var categories, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categories = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.get("categories/" + categoryId)];
                    case 2:
                        categories = (_a.sent()).data.path_from_root.map(function (category) { return category.name; });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.error(error_2.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, categories];
                }
            });
        });
    };
    MeliService.prototype.getItem = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var item, description, categories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get("items/" + id)];
                    case 1:
                        item = (_a.sent()).data;
                        return [4 /*yield*/, this.getItemDescription(item.id)];
                    case 2:
                        description = _a.sent();
                        item.description = description || null;
                        return [4 /*yield*/, this.getItemCategories(item.category_id)];
                    case 3:
                        categories = _a.sent();
                        return [2 /*return*/, { item: item, categories: categories }];
                }
            });
        });
    };
    return MeliService;
}());
exports.default = MeliService;
//# sourceMappingURL=MeliService.js.map