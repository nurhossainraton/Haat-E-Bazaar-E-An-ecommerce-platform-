import { Button,Box,styled,ButtonGroup } from "@mui/material";
import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
const Component = styled(Box)`
      margin-top:20px;
`      


const GroupedButton = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1); // Initialize with item quantity
  const dispatch = useDispatch();
  
  const addProduct = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(addToCart(item.id, newQuantity)); 
  };

  const removeProduct = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(addToCart(item.id, newQuantity));
    } 
  };

  return (
    <Component>
      <Button onClick={removeProduct}>-</Button>
      <Button>{quantity}</Button>
      <Button onClick={addProduct}>+</Button>
    </Component>
  );
};


export default GroupedButton;