const express = require('express');
const dotenv = require('dotenv');
const {sequelize} = require('./models');

dotenv.config();

const app = express();
app.use(express.json());

app.get('/api/v1/health', (req, res) => res.json({status: 'ok'}));

sequelize.sync({ force: true }).then(() => {
  console.log('Creado ok');
  app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
  });
});
