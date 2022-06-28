import { Router } from "express";

import deleteCategoriesController from "../controllers/categories/deleteCategories.controller";
import createCategoriesController from "../controllers/categories/createCategories.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import listCategoryDataController from "../controllers/categories/listCategoryData.controller";
import updateCategoryController from "../controllers/categories/updateCategoryController";

const router = Router();

router.post("", createCategoriesController);
router.get("", listCategoriesController);
router.get("/:id", listCategoryDataController);
router.patch("/:id", updateCategoryController);
router.delete("/:id", deleteCategoriesController);

export default router;
