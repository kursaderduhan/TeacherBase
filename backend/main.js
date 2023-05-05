const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./helpers/database/connectDatabase');
const routers = require('./routers');
const cors = require('cors');
// Environment Variables
dotenv.config({path: './config/env/config.env'});

// MongoDb Connection
connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());
// Routers
app.use('/', routers)

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
   console.log(`Server started on ${process.env.PORT} : ${process.env.NODE_ENV}`);
})