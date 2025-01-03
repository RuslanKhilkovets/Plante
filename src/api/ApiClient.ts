import axios, { AxiosResponse } from "axios";
import config from "./config";
import ICatalogFilters from "../types/ICatalogFilters";
import { TProductFullData } from "../types/IProductItem";

class ApiClient {
    static Headers = (options: any) => {
        const headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...options
        };
        return headers;
    };

    static Response<T>(response: AxiosResponse): T {
        try {
            return response.data;
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(e.message);
            } else {
                throw new Error('An unknown error occurred');
            }
        }
    }

    static get = async <T>(url: string): Promise<T> => {
        const fullUrl = config.apiUrl + url;
        const response = await axios.get<AxiosResponse<T>>(fullUrl);
    
        return ApiClient.Response<T>(response);
    };

    static post = async <T>(
        url: string,
        body: object = {},
        options: object = {}
    ): Promise<T> => {
        const fullUrl = config.apiUrl + url;
    
        const headers = await ApiClient.Headers(options);
        const response = await axios.post<AxiosResponse<T>>(fullUrl, body, {
          headers,
        });
    
        return ApiClient.Response<T>(response);
    };

    //// Requests

    static GetCatalogItems = async (category: string, limit = 100) =>
        this.get(`/catalog?catalog=${category}&_limit=${limit}`);

    static GetFilteredItems = async (category: string, filters: ICatalogFilters) => {
        if (!category) {
            return [];
        }
    
        const { price, productAgeTypes, productWeightTypes } = filters;
    
        let requestUrl = `catalog?catalog=${category}`;
    
        if (price.length === 2) {
            requestUrl += `&price_gte=${price[0]}&price_lte=${price[1]}`;
        }
        if (productAgeTypes.length > 0) {
            requestUrl += '&' + productAgeTypes.map(type => `type=${type}`).join('&');
        }
        if (productWeightTypes.length > 0) {
            requestUrl += '&' + productWeightTypes.map(type => `weight=${type}`).join('&');
        }
    
        try {
            const response = await this.get(`/${requestUrl}`);
            const data = response as TProductFullData[];
    
            const filteredItems = data.filter(item => {
                const meetsPriceCriteria = item.price >= price[0] && item.price <= price[1];
                const meetsAgeTypeCriteria = productAgeTypes.length ? productAgeTypes.includes(item.type) : true;
                const meetsWeightTypeCriteria = productWeightTypes.length ? productWeightTypes.includes(item.weight) : true;
                
                return meetsPriceCriteria && meetsAgeTypeCriteria && meetsWeightTypeCriteria;
            });
            
            return filteredItems;
        } catch (error) {
            console.error("Error fetching menu items:", error);
            return [];
        }
    }    

    static GetProducts = async () =>
        this.get(`/products`);

    static GetProductDetails = async (item: string) =>
        this.get(`/catalog?url=${item}`) as Promise<TProductFullData[]>;

} 

export default ApiClient;