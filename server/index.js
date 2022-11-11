<<<<<<< HEAD
import express from "express";
import dotenv from 'dotenv';
import Connection from "./database/db.js";
import DefaultData from "./default.js";
const app = express();

dotenv.config();

const PORT = 8000;
=======
import express from 'express'
import dotenv from 'dotenv'
import Connection from './database/db.js'
import DefaultData from './default.js'

const app = express()

dotenv.config()
const PORT = 8000
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

Connection(USERNAME, PASSWORD)
>>>>>>> feaa2d0c7ea81367206fd9f83d9d73feb85f3c76


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);


app.listen(PORT, () =>
<<<<<<< HEAD
    console.log(`Server is Runnning successfully on PORT ${PORT} `)
);

DefaultData();
=======
  console.log(`Server is Runnning successfully on PORT ${PORT} `),
)

DefaultData()
>>>>>>> feaa2d0c7ea81367206fd9f83d9d73feb85f3c76
