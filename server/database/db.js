<<<<<<< HEAD
import mongoose from "mongoose";


export const Connection = async (username,password) => {

    const URL =`mongodb://${username}:${password}@ac-l1vlumr-shard-00-00.ft3eape.mongodb.net:27017,ac-l1vlumr-shard-00-01.ft3eape.mongodb.net:27017,ac-l1vlumr-shard-00-02.ft3eape.mongodb.net:27017/?ssl=true&replicaSet=atlas-ijjj24-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
       console.log('Database connected successfully');

    } catch(error){
        console.log('Error while connecting with the database', error.message);

    }
}


export default Connection;
=======
import mongoose from 'mongoose'
//mongoDB pass aditya1609

export const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-wwqrlc7-shard-00-00.zcuuuer.mongodb.net:27017,ac-wwqrlc7-shard-00-01.zcuuuer.mongodb.net:27017,ac-wwqrlc7-shard-00-02.zcuuuer.mongodb.net:27017/?ssl=true&replicaSet=atlas-g1lz95-shard-0&authSource=admin&retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log('Database Connected Successfully')
  } catch (error) {
    console.log('Error while connecting with the database', error.message)
  }
}
export default Connection
>>>>>>> feaa2d0c7ea81367206fd9f83d9d73feb85f3c76
