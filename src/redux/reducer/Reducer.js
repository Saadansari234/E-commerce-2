export const initialState = {
    AddCart: [],
    logged: false,
    
}

export const addToCart = (state = initialState.AddCart, action) => {
    switch (action.type) {
        case "ADDTOCART":

            return [
                ...state,
                action.payload,
            ];

        case "REMOVECART":
            const newState = [...state];
            newState.splice(action.payload, 1);
            return newState;

        default: return state
    }
}

export const loginInfo = (state = initialState.logged, action) => {
    switch (action.type) {
        case "SIGNIN": return state = true
        case "SIGNOUT": return state = false
        default: return state
    }
}