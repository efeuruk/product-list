import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes";
import itemList from "../../data/itemList.json";

interface State {
  index: number;
  basketData: [];
}

const initialState: State = {
  index: 0,
  basketData: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        index: state.index + 1,
        basketData: [
          ...state.basketData,
          itemList.filter(item => {
            return item.id === action.payload;
          }),
        ],
      };
    case REMOVE_FROM_BASKET:
      if (state.index > 0) {
        state.basketData.splice(action.payload.index, 1);
        return {
          ...state,
          index: state.index - 1,
          basketData: state.basketData,
        };
      } else {
        return {
          ...state,
          index: 0,
        };
      }
    default:
      return state;
  }
};
