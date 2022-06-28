import { Router } from "express";

import createProductsController from "../controllers/createProducts.controller";
import listProductsController from "../controllers/listProducts.controller";
import listProductDataController from "../controllers/listProductData.controller";
import updateProductController from "../controllers/updateProducts.controller";
import listProductsByCategoryController from "../controllers/listProductsByCategory.controller";
import deleteProductController from "../controllers/deleteProducts.controller";

const router = Router();

router.post("", createProductsController);
router.get("", listProductsController);
router.get("/:id", listProductDataController);
router.patch("/:id", updateProductController);
router.get("/category/:category_id", listProductsByCategoryController);
router.delete("/:id", deleteProductController);

export default router;
