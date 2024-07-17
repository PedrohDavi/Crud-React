const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const playersRoute = require('./routes/players');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', playersRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
