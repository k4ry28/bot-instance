const express = require('express');
const router = require('./routes');
const db = require('./db');

dotenv.config();
const app = express();
const dbURI = process.env.DB_URI;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);
db(dbURI); 

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en puerto ${process.env.PORT}`);
});