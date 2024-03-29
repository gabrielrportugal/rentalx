import './database';
import './shared/container';
import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';
import swaggerUI from 'swagger-ui-express';

import { handleError } from './errors/handleErrorMiddleware';
import { router } from './routes/index.routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use(handleError);

app.listen(3333, () => console.log('🚀 Server started on port 3333'));
