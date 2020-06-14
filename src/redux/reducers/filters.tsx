import { FILTER_CATEGORY, FILTER_BRAND, FILTER_PRICE, RENDER_ALL } from "../actions/actionTypes";
import { itemList } from '../../data/mockData';
const initialState = {
    categories: [
        {
            id: "Laptop",
            name: "Laptop"
        },
        {
            id: "Desktop",
            name: "Desktop"
        }
    ],
    brands: [
        {
            id: "Asus",
            name: "Asus"
        },
        {
            id: "Samsung",
            name: "Samsung"
        },
        {
            id: "Monster",
            name: "Monster"
        },
        {
            id: "Macbook",
            name: "Macbook"
        }
    ],
    priceMargins: [
        {
            id: "1000, 1500",
            name: "1000 - 1500 TL"
        },
        {
            id: "1500, 2000",
            name: "1500 - 2000 TL"
        },
        {
            id: "2000, 2500",
            name: "2000 - 2500 TL"
        },
        {
            id: "2500, 100000",
            name: "2500 TL and above"
        }
    ],
    filteredResult: itemList
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RENDER_ALL:
            return {
                ...state,
                filteredResult: itemList
            }
        case FILTER_CATEGORY:
            return {
                ...state,
                filteredResult: itemList.filter(item => {
                    return item.category === action.payload;
                })
            }
        case FILTER_BRAND:
            return {
                ...state,
                filteredResult: itemList.filter(item => {
                    return item.brand === action.payload;
                })
            }
        case FILTER_PRICE:
            const lowerBound = parseInt(action.payload.split(',')[0]);
            const higherBound = parseInt(action.payload.split(',')[1]);
            const margin = lowerBound - higherBound;
            return {
                ...state,
                filteredResult: itemList.filter(item => {
                    if ((item.price >= lowerBound && item.price <= higherBound))
                        return item
                })
            }
        default:
            return state;
    }
}