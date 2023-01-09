import {
  FILTER_CATEGORY,
  FILTER_BRAND,
  FILTER_PRICE,
  RENDER_ALL,
  SEARCH,
} from "../actions/actionTypes";
import itemList from "../../data/itemList.json";
import filterList from "../../data/filterList.json";

interface State {
  filteredResult: {}[];
}

const initialState: State = {
  ...filterList,
  filteredResult: itemList,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RENDER_ALL:
      return {
        ...state,
        filteredResult: itemList,
      };
    case SEARCH:
      return {
        ...state,
        filteredResult: itemList.filter(item => {
          return (
            item.productName
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            item.brand.toLowerCase().includes(action.payload.toLowerCase()) ||
            item.category.toLowerCase().includes(action.payload.toLowerCase())
          );
        }),
      };
    case FILTER_CATEGORY:
      console.log(action.payload);
      return {
        ...state,
        filteredResult: itemList.filter(item => {
          return item.category === action.payload;
        }),
      };
    case FILTER_BRAND:
      return {
        ...state,
        filteredResult: itemList.filter(item => {
          return item.brand === action.payload;
        }),
      };
    case FILTER_PRICE:
      const lowerBound: number = parseInt(action.payload.split(",")[0]);
      const higherBound: number = parseInt(action.payload.split(",")[1]);
      return {
        ...state,
        filteredResult: itemList.filter(item => {
          return item.price >= lowerBound && item.price <= higherBound
            ? item
            : "";
        }),
      };
    default:
      return state;
  }
};
