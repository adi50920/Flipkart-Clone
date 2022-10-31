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
