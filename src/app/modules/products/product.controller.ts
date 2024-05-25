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

  const getSingleProduct = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
      // console.log(req.params)
  
      const result = await ProductDataServices.getProductById(productId);
  
      res.status(200).json({
        success: true,
        message: 'Product is retrieved succesfully',
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'something went wrong',
        error: err,
      });
    }
  }

  const updateAProduct = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
      const data = req.body;
  
      const result = await ProductDataServices.updateProductInDB(productId, data);
      // console.log(result)
  
      if (!result) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        });
      }
  
      res.status(200).json({
        success: true,
        message: 'Product updated successfully!',
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
  }

  const deleteProduct = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
  
      await ProductDataServices.deleteProductFromDB(productId);
  
      res.status(200).json({
        success: true,
        message: 'Product is deleted succesfully',
        data: null,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'something went wrong',
        error: err,
      });
    }
  }
  

  export const ProductControllers = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateAProduct,
    deleteProduct
  };