import { FILTER_CATEGORY, FILTER_BRAND, FILTER_PRICE, RENDER_ALL } from "../actions/actionTypes";
import itemList from '../../data/itemList.json';
import filterList from '../../data/filterList.json';

interface State {
    filteredResult: {}[]
}

const initialState: State = {
    ...filterList,
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
            console.log(action.payload[0])
            return {
                ...state,
                // Item list boşsa direkt olarak filtre ekelemesi yap, doluysa yeni eklenen filtreleri buraya ekle 
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
            return {
                ...state,
                filteredResult: itemList.filter(item => {
                    return (item.price >= lowerBound && item.price <= higherBound) ? item : ''
                })
            }
        default:
            return state;
    }
}