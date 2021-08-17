import express from 'express';
import router from './routes/router.js';
import DatabaseSetUp from "./db/db-setup.js";

const databaseSetUp = new DatabaseSetUp();
databaseSetUp.setupDb();

const app = express();
app.use(express.json());
app.use(router);
app.listen(8080, () => console.log('server is running on port 8080'));
