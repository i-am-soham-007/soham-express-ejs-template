import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
var expressLayouts = require('express-ejs-layouts');

const path = require('path');

const app: Express = express();
const port = process.env.PORT;

//app.use(express.static(path.join(__dirname + '../public')));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 
app.set('layout', path.join(__dirname, 'views/layouts/master'));
app.use(expressLayouts);




app.get('/', (req: Request, res: Response) => {
  //res.send('Express + TypeScript Server');
  res.render('index', {title: 'Home'});
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});