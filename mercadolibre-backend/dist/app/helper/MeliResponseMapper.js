"use strict";
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
exports.MeliItemMapper = exports.MeliItemsMapper = exports.MeliResponseMapper = void 0;
var config_1 = require("../config/config");
var MathHelper_1 = require("./MathHelper");
exports.MeliResponseMapper = function (data) {
    //Llamamos al prepocesador de items
    var items = exports.MeliItemsMapper(data);
    var categories = data.categories;
    var author = {
        name: config_1.Author.name,
        lastname: config_1.Author.lastname
    };
    //Solo por propositos de legibilidad, podriamos retornar directamente {author,categories,...()}
    var result = __assign({ author: author,
        categories: categories }, (Array.isArray(items) ? { items: items } : { item: items }));
    return result;
};
exports.MeliItemsMapper = function (data) {
    if (Array.isArray(data.items)) {
        return data.items.map(function (item) { return exports.MeliItemMapper(item); });
    }
    else {
        return exports.MeliItemMapper(data.item);
    }
};
exports.MeliItemMapper = function (data) {
    var result = __assign(__assign(__assign({ id: data.id, title: data.title, address: {
            state: data.address ? data.address.state_name : data.seller_address.state.name || null,
            city: data.address ? data.address.city_name : data.seller_address.city.name || null
        }, price: {
            currency: data.currency_id,
            amount: data.price,
            decimals: MathHelper_1.countDecimals(data.price)
        }, picture: data.pictures ? data.pictures.pop().secure_url || data.pictures.pop().url : data.thumbnail, condition: data.condition, free_shipping: data.shipping.free_shipping }, (data.sold_quantity ? { sold_quantity: data.sold_quantity } : {})), (data.permalink ? { permalink: data.permalink } : {})), (data.description && { description: data.description }));
    //Utilizando spread operator de 2 maneras distintas para hacer lo mismo en SoldQuantity y Description
    return result;
};
//# sourceMappingURL=MeliResponseMapper.js.map