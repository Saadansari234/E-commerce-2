import Action from "./Action";

export const addtocart= (data) =>{
    return{
        type:Action.ADDTOCART,    
        payload: data
    
    }
}

export const removecart= (data) =>{
    return{
        type:Action.REMOVECART,    
        payload: data
    
    }
}

export const showmenu= () =>{
    return{
        type:Action.SHOWMENU,
    
    }
}



export const signin= () =>{
    return{
        type:Action.SIGNIN,      
    }
}

export const signout= () =>{
    return{
        type:Action.SIGNOUT,      
    }
}

export const activate = () =>{
    return{
        type:Action.ACTIVATE,      
    }
}

export const signup= (data) =>{
    return{
        type:Action.SIGNUP,     
        payload: data 
    }
}

