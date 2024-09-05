import axios from "axios";
import { ADD_TO_CART,REMOVE_FROM_CART,ADD_TO_CART_ERROR } from '../constants/cartConstant'

export const addToCart =(id,quantity)=>async(dispatch)=>{
    try{
        
        const {data} = await axios.get(`http://localhost:8000/product/${id}`);
        //const data = await response.json();
        console.log('data is',data);
        console.log('quantity ',quantity);
        
        dispatch({
            type:ADD_TO_CART,
            payload:{
                ...data,quantity
            }
        })
    }catch(error){
        console.log('error',error.message);
       dispatch({
           type:ADD_TO_CART_ERROR,
           payload:error.message
       })
    }
}

export const removeFromCart =(id)=> dispatch =>{
    
    dispatch({
        type:REMOVE_FROM_CART,
        payload:id
    })


}