import express from 'express';
import db from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import router from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());

 app.use(bodyParser.json({extended:true}));
 app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);
//app.use(express.json());


dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

db(username,password);

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

//DefaultData();