import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes"

const initialState = {
    index: 0,
    data: [
        {
            image: "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            productName: "Asus 1",
            price: 1000
        },
        {
            image: "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            productName: "Asus 2",
            price: 1200
        },
        {
            image: "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            productName: "Samsung 1",
            price: 1500
        },
        {
            image: "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            productName: "Samsung 2",
            price: 1700
        },
        {
            image: "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            productName: "Monster 1",
            price: 2500
        },
        {
            image: "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            productName: "Monster 2",
            price: 3700
        },
        {
            image: "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            productName: "Macbook 1",
            price: 7500
        },
        {
            image: "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            productName: "Monster 2",
            price: 12500
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                // index: state.index + action.payload
                index: state.index + 1
            }
        case REMOVE_FROM_BASKET:
            if (state.index > 0) {
                return {
                    ...state,
                    index: state.index - 1
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
