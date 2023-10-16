import 'dotenv/config';
import config from './config/config.js';
import express, { json, urlencoded } from 'express';
import __dirname from './dirname.js';
import cors from 'cors';
import db from './config/dbConnection.js';

import indexRouter from './routes/index.routes.js';
import getLogger from './utils/log.utils.js';

import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

/* CONFIGURATIONS */
const app = express();
const PORT = config.server.port;
const DATABASE = '';

// Express
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(cors());

// Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Documentación en Swagger de MI_APLICACIÓN',
      description:
        'BREVE DESCRIPCIÓN LA APLICACIÓN.',
    },
  },
  apis: [`${__dirname}/docs/**/*.yaml`],
};

const specs = swaggerJSDoc(swaggerOptions);

// Logger
const log = getLogger();

// Morgan
app.use(morgan('dev'));

// Server HTTP
const server = app.listen(PORT, (err) => {
  db;
  if (err) {
    log.fatal('sever index - Connection Error: ', err.message);
    return;
  }
  log.info(`Running on port ${PORT}, in ${config.environment.env} environment`);
});

// Routes
app.use(indexRouter);
app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

export default app;
