import {products} from './constants/data.js';
import Product from './model/productSchema.js';
const DefaultData=async() => {
      try{
          
          await Product.insertMany(products);
          console.log('Data inserted successfully');

      }catch(error){
          console.log('error in inserting data'+error);
      }
}

export default DefaultData;