import { z } from "zod";

const orderSchemaValidation = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be string",
    })
    .email({ message: "email address is invalid" }),
  productId: z.string({
    required_error: "Product ID is required",
    invalid_type_error: "Product id must be mongodb ID",
  }),
  quantity: z.number({
    required_error: "Quantity is required",
    invalid_type_error: "Quantity must be number",
  }),
  price: z.number({
    required_error: "Price is required",
    invalid_type_error: "Price must be number",
  }),
});

export default orderSchemaValidation;