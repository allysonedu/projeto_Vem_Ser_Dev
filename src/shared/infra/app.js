require('dotenv').config();

const express = require('express');

const routes = require('./routes');

const app = express();

const port = 3333;

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log(`rodando na porta ${port}`));
