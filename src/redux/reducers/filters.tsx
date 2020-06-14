import { FILTER_CATEGORY, FILTER_BRAND, FILTER_PRICE, RENDER_ALL } from "../actions/actionTypes";
import { itemList } from '../../data/mockData';
const initialState = {
    categories: ['Laptop', 'Desktop'],
    brands: ['Asus', 'Samsung', 'Monster', 'Macbook'],
    priceMargins: ['1000 - 1500 TL', '1500 - 2000 TL', '2000 - 2500 TL', '2500 TL and above'],
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
            return {
                ...state,
                // index: state.index - 1
            }
        default:
            return state;
    }
}