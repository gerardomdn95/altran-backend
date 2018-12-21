import * as express from 'express';
import * as http from 'http';
import { Application } from 'express';
import { Request, Response } from 'express';

const bodyParser = require('body-parser');
const routes = require('./server/routes/routes');
const cors = require('cors');
const app: Application = express();
const port = process.env.PORT || 3001;
const server = http.createServer(app);

app.use(cors());
// Acepta JSON y FORM
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

server.listen(port, () => {
  console.log(`Contract Server running on port ${port}`);
});

module.exports = { app };
