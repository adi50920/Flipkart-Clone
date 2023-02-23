
// import { products } from "./constants/data.js"
// import Product from "./model/product-schema.js";


const Defaultdata = async () => {
    try{
        
        await Product.insertMany(products);
        

        console.log('data imported succesfully');

    } catch(error){
        console.log('error while inseting default data', error.message);

    }

}


export default Defaultdata;
