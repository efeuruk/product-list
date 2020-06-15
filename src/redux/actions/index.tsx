import actionTypes from "./actionTypes";

export const addToBasket = (id: number) => ({
    type: actionTypes.ADD_TO_BASKET,
    payload: id
});

export const removeFromBasket = (id: object) => ({
    type: actionTypes.REMOVE_FROM_BASKET,
    payload: id
})

export const filterCategory = (value?: string) => ({
    type: actionTypes.FILTER_CATEGORY,
    payload: value
})

export const filterBrand = (value?: string) => ({
    type: actionTypes.FILTER_BRAND,
    payload: value
})

export const filterPriceMargin = (value?: string) => ({
    type: actionTypes.FILTER_PRICE,
    payload: value
})

export const renderAll = () => ({ type: actionTypes.RENDER_ALL })