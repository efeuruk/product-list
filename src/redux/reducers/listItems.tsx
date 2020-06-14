import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes";
import { itemList } from '../../data/mockData';

const initialState = {
    index: 0,
    basketData: []
}

function popElement(basketData) {
    basketData.pop();
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            console.log(action.payload)
            return {
                ...state,
                index: state.index + 1,
                basketData: [...state.basketData, itemList.filter(item => {
                    return item.id === action.payload
                })],
            }
        case REMOVE_FROM_BASKET:
            if (state.index > 0) {
                console.log(action.payload)
                return {
                    ...state,
                    index: state.index - 1,
                    basketData: state.basketData.pop(),
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
