export const initialState = {
    smurfs:[]
}
export const reducer = (state = initialState, action) => {
    switch(action.type){
case "RECEIVE_ALL_SMURFS":
    return {...state,
    smurfs:action.payload}
    case "ADD_NEW_SMURF":
            return {...state,
                smurfs:action.payload}
case "DELETE_SMURF":
  return {...state,
smurfs:action.payload}
    default:
        return state 
    }
    
        
}