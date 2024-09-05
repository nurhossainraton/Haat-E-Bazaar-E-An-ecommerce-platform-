import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import DetailsView from './Components/Details/DetailsView';
import { Box } from '@mui/material';
import DataProvider from './Context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './Components/Cart/Cart';
import Orderpage from './Components/Order/Orderpage';
function App() {
  return (
    
   <DataProvider>
    <BrowserRouter>
      <Header/>
      <Box style={{marginTop:'60px'}}>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<DetailsView/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<Orderpage/>}/>
      </Routes>
      </Box>
    </BrowserRouter>
   </DataProvider>
  );
}

export default App;
