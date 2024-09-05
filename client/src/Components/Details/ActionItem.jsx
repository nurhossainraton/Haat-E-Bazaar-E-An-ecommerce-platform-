import React,{useState} from 'react';
import { Box, Button, styled } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const LeftContent = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 0 0 40px', // Adjust padding on medium screens
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px 0 0 20px', // Adjust padding on small screens
    },
}));

const Image = styled('img')({
    padding: '15px',
    width: '95%',
});

const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between', // Ensure buttons are spaced apart
    marginTop: '10px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column', // Stack buttons vertically on medium screens
        alignItems: 'center',
        gap: '10px', // Add space between buttons
    },
}));

const StyleButton = styled(Button)(({ theme }) => ({
    width: '48%',
    height: 50,
    borderRadius: '2px',
    fontSize: '18px',
    [theme.breakpoints.down('lg')]: {
        width: '46%', 
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%', // Make buttons full-width on small screens
    },
}));

const ActionItem = ({ product }) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

const handleaddToCart = () => {
    dispatch(addToCart(product.id, quantity));
    navigate('/cart');

};

const handleOrder = () => {
    dispatch(addToCart(product.id, quantity));
    navigate('/cart');

};

    
    return (
        <LeftContent>
            <Box style={{ padding: '15px 20px', border: '5px solid #f0f0f0' }}>
                <Image src={product.detailUrl} alt={product.title} />
            </Box>
            <ButtonContainer>
                <StyleButton variant="contained" style={{ background: '#932811' }}onClick={handleOrder}>
                    <FlashOnIcon style={{ fontSize: '30px' }} /> Buy Now
                </StyleButton>
                <StyleButton variant="contained" style={{ background: '#FFA500' }} onClick={handleaddToCart}>
                    <AddShoppingCartIcon style={{ fontSize: '30px', color: '#932811' }}  /> Add to Cart
                </StyleButton>
            </ButtonContainer>
        </LeftContent>
    );
};

export default ActionItem;
