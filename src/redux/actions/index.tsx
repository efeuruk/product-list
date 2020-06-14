import actionTypes from "./actionTypes";

export const addToBasket = () => ({
    type: actionTypes.ADD_TO_BASKET,
});

export const removeFromBasket = () => ({
    type: actionTypes.REMOVE_FROM_BASKET
})

export const filterCategory = (value?: string) => ({
    type: actionTypes.FILTER_CATEGORY,
    payload: value
})

export const filterBrand = (value?: string) => ({
    type: actionTypes.FILTER_BRAND,
    payload: value
})

export const renderAll = () => ({ type: actionTypes.RENDER_ALL })