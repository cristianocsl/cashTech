const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const root = require('./controllers/router');

const PORT = 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', root);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
