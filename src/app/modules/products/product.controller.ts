import { Request, Response } from 'express';
import productValidationSchema from './product.validation';
import { ProductDataServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
    try {
    //  console.log(req.body)
      const zodParsedData = productValidationSchema.parse(req.body);
  
      const result = await ProductDataServices.createProductIntoDB(zodParsedData);
  
      res.status(200).json({
        success: true,
        message: 'Product is created succesfully',
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'something went wrong',
        error: err,
      });
    }
  };

  const getAllProduct = async (req: Request, res: Response) => {
    try {
      // const result = await ProductDataServices.getAllProductsFromDB();
      const { searchTerm } = req.query;
      const result = await ProductDataServices.getAllProductsFromDB(searchTerm as string);
  
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'something went wrong',
        error: err,
      });
    }
  };
  

  export const ProductControllers = {
    createProduct,
    getAllProduct
  };