import { Router } from "express";

import createProductsController from "../controllers/products/createProducts.controller";
import listProductsController from "../controllers/products/listProducts.controller";
import listProductDataController from "../controllers/products/listProductData.controller";
import updateProductController from "../controllers/products/updateProducts.controller";
import listProductsByCategoryController from "../controllers/products/listProductsByCategory.controller";
import deleteProductController from "../controllers/products/deleteProducts.controller";

const router = Router();

router.post("", createProductsController);
router.get("", listProductsController);
router.get("/:id", listProductDataController);
router.patch("/:id", updateProductController);
router.get("/category/:category_id", listProductsByCategoryController);
router.delete("/:id", deleteProductController);

export default router;
