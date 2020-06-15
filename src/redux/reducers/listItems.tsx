// REMOVE_FROM_BASKET'i implemente et, 
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes";
import itemList from '../../data/itemList.json';

const initialState = {
    index: 0,
    basketData: []
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            console.log(action.payload)
            return {
                ...state,
                index: state.index + 1,
                basketData: [...state.basketData, itemList.filter(item => {
                    console.log(item.id === action.payload)
                    return item.id === action.payload
                })],
            }
        case REMOVE_FROM_BASKET:
            if (state.index > 0) {
                console.log(action.payload)
                return {
                    ...state,
                    index: state.index - 1,
                    basketData: state.basketData.splice(action.payload, 1)
                }
            }
            else {
                return {
                    ...state,
                    index: 0
                }
            }
        default:
            return state;
    }
}
