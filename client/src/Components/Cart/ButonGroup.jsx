import { Button,Box,styled,ButtonGroup } from "@mui/material";
import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
const Component = styled(Box)`
      margin-top:20px;
`      


const GroupedButton=({item})=>{
  const [quantity,setQuantity]=useState(1);
  const dispatch=useDispatch();
  
  const addProduct = () => {
    console.log('button clicked');
    const newQuantity = quantity + 1; // Calculate the new quantity
    setQuantity(newQuantity); // Update the state
    dispatch(addToCart(item.id, newQuantity)); // Dispatch with the updated quantity
};

  const removeProduct=()=>{
    const newQuantity = quantity - 1; // Calculate the new quantity
    setQuantity(newQuantity); 
    dispatch(addToCart(item.id, newQuantity));

  }

    return(
        <Component>
          <Button onClick={removeProduct}>-</Button>
          <Button>{quantity}</Button>
          <Button onClick={addProduct}>+</Button>
        </Component>
          
    )
}      

export default GroupedButton;