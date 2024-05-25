import express from 'express';
import { ProductControllers } from './product.controller';
const router = express.Router();

router.post('/', ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProduct);
router.get('/:productId', ProductControllers.getSingleProduct);
router.put('/:productId', ProductControllers.updateAProduct)
router.delete('/:productId', ProductControllers.deleteProduct)


export const ProductRoutes = router;