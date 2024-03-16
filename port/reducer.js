"use client"
export const initialState={
    providers:{},
}

const reducer=(state,action) => {
    // console.log("action>>>>",action); 
    // console.log("action>>>>123",action.user.message[0].username); 

    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            let newBasket=[...state.basket];
            if(index>=0){
                newBasket.splice(index,1);
            }else{
                console.log(`cant remove product whose id is ${index}`)
            }
            return{
                ...state,
                basket:newBasket 
            }
        case 'SET_ADDRESS':
            return{
                ...state,
                address:action.item
            }
        case 'EMPTY_ADDRESS':
            return{
                ...state,
                basket:[]
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_ADMIN":
            return{
                ...state,
                user:action.user
            } 

        case "SET_PROVIDER":
            return {
                ...state,
                providers: action.providers,
            };
        default:
            return state
    }    
}
export default reducer;