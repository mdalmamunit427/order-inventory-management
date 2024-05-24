import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import { ProductRoutes } from './app/modules/products/product.route';

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);


app.get('/', (req:Request, res: Response) => {
  res.send('Hello World!')
})

export default app;