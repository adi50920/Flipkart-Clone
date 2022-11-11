<<<<<<< HEAD
import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique:true


    },
    url: String,
    detailurl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String,
    
})
    

const Product = mongoose.model('product', productSchema);

export default Product;
=======
import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: String,
  detailurl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
})

const Product = mongoose.model('product', ProductSchema)

export default Product
>>>>>>> feaa2d0c7ea81367206fd9f83d9d73feb85f3c76
