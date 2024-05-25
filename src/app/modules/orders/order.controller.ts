import { Request, Response } from "express";
import orderSchemaValidation from "./order.validation";
import { Product } from "../products/product.model";
import { OrderServices } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
  try {
    // zod validation parse
    const validation = orderSchemaValidation.safeParse(req.body);
    // check if zod error
    if (
      typeof validation.error !== "undefined" &&
      validation.error.name === "ZodError"
    ) {
      const errorLists = validation.error.issues.map((err) => err.message);
      return res.status(500).json({
        success: false,
        message: errorLists,
      });
    }

   
    // check if zod validation success and successful zod data parse
    if (validation.success) {
      const product = await Product.findById(validation.data.productId);

      // check if order quantity less than product quantity, otherwise show error message
      if (product && product.inventory.quantity < validation.data.quantity) {
        return res.status(404).json({
          success: false,
          message: "Insufficient quantity available in inventory",
        });
      }

      if (product) {
        //  product quantity will be reduce from product.inventory.quantity  equal to order quantity;
        product.inventory.quantity =
          product.inventory.quantity - validation.data.quantity;

        // check if product quantity equal 0,  then product.inventory.inStock will be false;
        product.inventory.inStock =
          product.inventory.quantity === 0 ? false : true;

        const newOrder = await OrderServices.createANewOrder(validation.data);
        await product.save();
        return  res.status(200).json({
          success: true,
          message: "Order created successfully!",
          data: newOrder,
        });
      }
    }
  } catch (error) {
    const err = error as Error;
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

const handleGetAllOrders = async (req: Request, res: Response) => {
    const email = req.query.email;
    try {
      const orders = await OrderServices.getAllOrders(email as string | undefined);

      if (orders.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Order not found",
        });
      }

      return  res.status(200).json({
        success: true,
        message: "Order created successfully!",
        data: orders,
      });


    } catch (error) {
      const err = error as Error;
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
}

export const OrderController = {
  createOrder,
  handleGetAllOrders
};
