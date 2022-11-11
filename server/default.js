<<<<<<< HEAD

import { products } from "./constants/data.js"
import Product from "./model/product-schema.js";


const Defaultdata = async () => {
    try{
        
        await Product.insertMany(products);
        

        console.log('data imported succesfully');

    } catch(error){
        console.log('error while inseting default data', error.message);

    }

}


export default Defaultdata;
=======
import { products } from './constants/data.js'
import Product from './model/product-schema.js'

const DefaultData = async () => {
  try {
    await Product.insertMany(products)

    console.log('data imported succesfully')
  } catch (error) {
    console.log('error while inseting default data', error.message)
  }
}

export default DefaultData
>>>>>>> feaa2d0c7ea81367206fd9f83d9d73feb85f3c76
