import { Router } from "express";

import createCategoriesController from "../controllers/createCategories.controller";
import listCategoriesController from "../controllers/listCategories.controller";
import listCategoryDataController from "../controllers/listCategoryData.controller";
import updateCategoryController from "../controllers/updateCategoryController";

const router = Router();

router.post("", createCategoriesController);
router.get("", listCategoriesController);
router.get("/:id", listCategoryDataController);
router.patch("/:id", updateCategoryController);

export default router;
