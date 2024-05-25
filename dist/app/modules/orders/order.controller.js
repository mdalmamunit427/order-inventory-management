"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_validation_1 = __importDefault(require("./order.validation"));
const product_model_1 = require("../products/product.model");
const order_services_1 = require("./order.services");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // zod validation parse
        const validation = order_validation_1.default.safeParse(req.body);
        // check if zod error
        if (typeof validation.error !== "undefined" &&
            validation.error.name === "ZodError") {
            const errorLists = validation.error.issues.map((err) => err.message);
            return res.status(500).json({
                success: false,
                message: errorLists,
            });
        }
        // check if zod validation success and successful zod data parse
        if (validation.success) {
            const product = yield product_model_1.Product.findById(validation.data.productId);
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
                const newOrder = yield order_services_1.OrderServices.createANewOrder(validation.data);
                yield product.save();
                return res.status(200).json({
                    success: true,
                    message: "Order created successfully!",
                    data: newOrder,
                });
            }
        }
    }
    catch (error) {
        const err = error;
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
});
const handleGetAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    try {
        const orders = yield order_services_1.OrderServices.getAllOrders(email);
        if (orders.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: orders,
        });
    }
    catch (error) {
        const err = error;
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
});
exports.OrderController = {
    createOrder,
    handleGetAllOrders
};
