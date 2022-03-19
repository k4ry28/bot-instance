const express = require('express');
const router = require('./routes');
const dotenv = require('dotenv');
const db = require('./db');
const dirname = __dirname;

dotenv.config();
const app = express();
const dbURI = process.env.DB_URI;

app.set('view engine', 'ejs')
app.use(express.static(dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);
db(dbURI); 

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en puerto ${process.env.PORT}`);
});