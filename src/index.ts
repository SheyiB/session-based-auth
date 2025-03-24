import express, {  Request, Response , Application } from 'express';
import dotenv from 'dotenv';

import authRouter from './routes/auth.route';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
const BASE_PATH = "/api/v1";

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});