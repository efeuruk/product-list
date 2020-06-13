import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actionTypes";

export const addToBasket = () => ({
    type: ADD_TO_BASKET,
});

export const removeFromBasket = () => ({
    type: REMOVE_FROM_BASKET
})