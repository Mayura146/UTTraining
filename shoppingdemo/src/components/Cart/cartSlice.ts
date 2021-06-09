import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState:CartItem[]=[]
{

}

const getItemIndex=(state:CartItem[],id:string):number=>{
    const idtoFind=state.map(item=>item.id);
    return idtoFind.indexOf(id);
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action:PayloadAction<CartItem>){
            const index=getItemIndex(state,action.payload.id);
            if(index<0)
            {
                state.push(action.payload);
            }
            else
            {
                state[index].quantity+=action.payload.quantity;
            }
        },

            removeFromCart(state,action:PayloadAction<{id:string}>){
                return state.filter(item=>item.id!==action.payload.id)
            },

            incrementValue(state,action:PayloadAction<{id:string}>){
              const index=getItemIndex(state,action.payload.id);
              state[index].quantity+=1;  

            },
            decrementValue(state,action:PayloadAction<{id:string}>){
                const index=getItemIndex(state,action.payload.id);
                if(state[index].quantity>1)
                state[index].quantity-=1
                else
                return state.filter(item=>item.id!==action.payload.id) 
        },

        bulkRemove(state,action:PayloadAction<{id:string[]}>){
            return state.filter(item=>!action.payload.id.includes(item.id)) 
        }

    }
})


export const{
    addToCart, 
    removeFromCart,
    incrementValue  ,
    decrementValue ,
    bulkRemove  
}=cartSlice.actions;
export default cartSlice.reducer;