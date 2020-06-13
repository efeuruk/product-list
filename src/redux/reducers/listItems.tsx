import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes"

const initialState = {
    index: 0,
    efe: "deneme"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                index: state.index + 1
            }
        case REMOVE_FROM_BASKET:
            return {
                ...state,
                index: state.index - 1
            }
        default:
            return state;
    }
}
