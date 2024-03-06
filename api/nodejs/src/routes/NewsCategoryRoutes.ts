import { Router } from "express";
import NewsCategoryController from "../controllers/NewsCategoryController";

const router = Router();

router.post("/news-category", NewsCategoryController.create);
router.get("/news-category", NewsCategoryController.getAll);
router.get("/news-category/:uuid", NewsCategoryController.getById);
router.put("/news-category/:uuid", NewsCategoryController.update);
router.delete("/news-category/:uuid", NewsCategoryController.delete);

export default router;
