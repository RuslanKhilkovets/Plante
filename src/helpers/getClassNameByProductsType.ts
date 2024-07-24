import ProductType from "../constants/productsTypes";

export default function getClassName (type: ProductType | undefined) {
    switch(type){
        case ProductType.DISCOUNTS : return "discounts";
        case ProductType.NEWS : return "news";
        case ProductType.POPULAR : return "popular";
        default : return "";
    }
}