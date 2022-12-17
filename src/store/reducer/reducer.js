
export const firstname=(state = "",action)=>{
    switch(action.type){
        case "FIRSTNAME":
            return action.payload
        default:
            return state
    }
}


export const lastname=(state = "",action)=>{
    switch(action.type){
        case "LASTNAME":
            return action.payload
        default:
            return state
    }
}
export const gender=(state = "",action)=>{
    switch(action.type){
        case "GENDER":
            return action.payload
        default:
            return state
    }
}


export const age=(state = "",action)=>{
    switch(action.type){
        case "AGE":
            return action.payload
        default:
            return state
    }
}
export const profesion=(state = "",action)=>{
    switch(action.type){
        case "PROFESION":
            return action.payload
        default:
            return state
    }
}

