
import axios from "axios";
import { GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL,GET_DETAILS_FAIL,GET_DETAILS_SUCCESS,GET_DETAILS_REQUEST,GET_DETAILS_RESET } from "../constants/productConstant";
const URL=`http://localhost:8000`

export const getProducts= ()=> async(dispatch)=>{
    try{
         let response = await axios.get(`${URL}/products`)
       // console.log(response);
        dispatch({
            type:GET_PRODUCTS_SUCCESS,
            payload:response.data
        });
    }
    catch(error){
        dispatch({
            type:GET_PRODUCTS_FAIL,
            payload:error.message
    });}
}

export const getDetails= (id)=> async(dispatch)=>{
    try{
        dispatch({
            type:GET_DETAILS_REQUEST
        });
        
        let response = await axios.get(`${URL}/product/${id}`)
        //console.log(response);
        dispatch({
            type:GET_DETAILS_SUCCESS,
            payload:response.data
        });
    }
    catch(error){
        dispatch({
            type:GET_DETAILS_FAIL,
            payload:error.message
    });}
}