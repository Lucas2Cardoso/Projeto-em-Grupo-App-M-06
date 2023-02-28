import express from 'express';
import cors from 'cors';
import contents_controllers from './controllers/contents_controllers.js';

const app = express();
contents_controllers.routes(app);

app.use(express.json());
app.use(cors());

export default app;
