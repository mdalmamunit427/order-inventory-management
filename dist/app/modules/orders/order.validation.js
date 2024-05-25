"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderSchemaValidation = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be string",
    })
        .email({ message: "email address is invalid" }),
    productId: zod_1.z.string({
        required_error: "Product ID is required",
        invalid_type_error: "Product id must be mongodb ID",
    }),
    quantity: zod_1.z.number({
        required_error: "Quantity is required",
        invalid_type_error: "Quantity must be number",
    }),
    price: zod_1.z.number({
        required_error: "Price is required",
        invalid_type_error: "Price must be number",
    }),
});
exports.default = orderSchemaValidation;
