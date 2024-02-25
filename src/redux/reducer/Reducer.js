const initialState = {
    AddCart: [],

}



export const addToCart = (state = initialState.AddCart, action) => {
    switch (action.type) {
        case "ADDTOCART":
            const existingItemIndex = state.findIndex((item) => item.id === action.payload.id);

            // If the item is not already in the cart, add it
            if (existingItemIndex === -1) {
              return [
                ...state,
                action.payload,
              ];
            }
      
            // If the item is already in the cart, you may want to update its quantity or handle it differently
            // For now, just return the current state without modification
            return state;

        case "CARTCOUNT":
             return state.length
        default: return state
    }
}