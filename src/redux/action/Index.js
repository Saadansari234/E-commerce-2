import Action from "./Action";

export const addtocart= (data) =>{
    return{
        type:Action.ADDTOCART,    
        payload: data
    
    }
}

export const cartcount= (data) =>{
    return{
        type:Action.CARTCOUNT,    
        payload: data
    
    }
}