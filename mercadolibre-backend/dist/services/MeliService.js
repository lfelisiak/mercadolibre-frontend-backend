import axios from 'axios';
import { Meli } from '../config/config';
export default class MeliService {
    constructor() {
        this.httpClient = axios.create({ baseURL: Meli.baseUri });
    }
    get(path, parameters, options) {
        return this.httpClient.get(path, { params: parameters });
    }
    getCategoriesFromFilters(data) {
        const categories = data
            .find(filter => filter.id === "category")
            .values
            .shift()
            .path_from_root
            .map(category => category.name);
        return categories;
    }
    async getItems(term, options) {
        const data = (await this.get('sites/MLA/search', { q: term })).data;
        let items = data.results.length ? data.results.splice(0, options.take || 4) : [];
        let categories = data.filters.length ? this.getCategoriesFromFilters(data.filters) : [];
        return { items, categories };
    }
    async getItemDescription(id) {
        //Dado que es probable que el item no cuente con una descripcion
        //
        let description = null;
        try {
            const result = (await this.get(`items/${id}/description`)).data;
            description = result.text ? result.text : result.plain_text;
        }
        catch (error) {
            console.error("Item does not have a Description", error.message);
        }
        return description;
    }
    async getItemCategories(categoryId) {
        let categories = [];
        try {
            categories = (await this.get(`categories/${categoryId}`)).data.path_from_root.map(category => category.name);
        }
        catch (error) {
            console.error(error.message);
        }
        return categories;
    }
    async getItem(id) {
        const item = (await this.get(`items/${id}`)).data;
        const description = await this.getItemDescription(item.id);
        item.description = description || null;
        const categories = await this.getItemCategories(item.category_id);
        return { item, categories };
    }
}
//# sourceMappingURL=MeliService.js.map