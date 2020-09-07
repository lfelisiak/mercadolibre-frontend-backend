import Service from "./Service";
import ApiMeli from "../config/ApiMeli";

export default class MeliService extends Service{
    constructor(){
        super(ApiMeli);
    }

    setHeader = (key,value) => {
        this.options.headers[key] = value;
    }
    
    getItems = async (searchTerm) => {
        return await this.get(`items?search=${searchTerm}`);
    }

    getItem = async (id) => {
        return await this.get(`items/${id}`);
    }


}