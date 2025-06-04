const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const ipiRoute = require('./routes/ipi');
const icmsRoute = require('./routes/icms');
const pisRoute = require('./routes/pis');
const cofinsRoute = require('./routes/cofins');

app.use('/api/ipi', ipiRoute);
app.use('/api/icms', icmsRoute);
app.use('/api/pis', pisRoute);
app.use('/api/cofins', cofinsRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
