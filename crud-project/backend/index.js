const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemsRoute = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', itemsRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
