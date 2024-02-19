const initialState = {
    AddCart: [],

}



export const addToCart = (state = initialState.AddCart, action) => {
    switch (action.type) {
        case "ADDTOCART":
            return [
                ...state,
                action.payload,
            ]

        case "CARTCOUNT":
             return state.length
        default: return state
    }
}