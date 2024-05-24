import { z } from 'zod';


export const variantValidationSchema = z.object({
    type: z.string(),
  value: z.string()
});

export const inventoryValidationSchema = z.object({
    quantity: z.number().min(0),
    inStock: z.boolean()
});

export const productValidationSchema = z.object({
    name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema
});

export default productValidationSchema