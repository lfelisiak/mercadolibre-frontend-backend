import axios from "axios";
export default class Service{
    constructor(config){
        this.options = {headers:{}};
        this.config = config;
        this.axiosInstance = axios.create({
            baseURL: config.baseUri,
        });
    }
    get = async (uri) => await this.axiosInstance.get(uri,this.options);
    post = async (uri,data) => {
        return await this.axiosInstance.post(uri,data,this.options);
    }    
    put = async (uri,data) => await this.axiosInstance.put(uri,data,this.options);
    delete = async (uri) => await this.axiosInstance.delete(uri, this.options);
}