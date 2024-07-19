import axios from "axios";
import ICatalogFilters from "../types/ICatalogFilters";

const getFilteredItems = async (category: string, filters: ICatalogFilters) => {
    const { price, productAgeTypes, productWeightTypes } = filters;

    let requestUrl = `http://localhost:5000/${category}?`;

    if (price.length === 2) {
        requestUrl += `price_gte=${price[0]}&price_lte=${price[1]}&`;
    }
    if (productAgeTypes.length > 0) {
        requestUrl += productAgeTypes.map(type => `type=${type}`).join('&') + '&';
    }
    if (productWeightTypes.length > 0) {
        requestUrl += productWeightTypes.map(type => `type=${type}`).join('&') + '&';
    }

    try {
        const response = await axios.get(requestUrl);
        
        return response.data;
    } catch (error) {
        console.error("Error fetching menu items:", error);
    }
};

export default getFilteredItems;