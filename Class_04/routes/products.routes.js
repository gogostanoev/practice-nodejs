import { Router } from "express";
import ProductController from "../controllers/products.controller.js";

const productController = new ProductController();
const productRouter = Router();


// GET ALL PRODUCTS
productRouter.get("/", productController.getAllProducts);

// GET PRODUCT BY ID
productRouter.get("/:id", productController.getProductById);

// CREATE PRODUCT
productRouter.post("/", productController.createProduct);

// UPDATE PRODUCT
productRouter.patch("/:id", productController.updateProduct);

export default productRouter;