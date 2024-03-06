import { Router } from "express";
import NewsController from "../controllers/NewsController";

const router = Router();

router.post("/news", NewsController.create);
router.get("/news", NewsController.getAll);
router.get("/news/:uuid", NewsController.getById);
router.put("/news/:uuid", NewsController.update);
router.delete("/news/:uuid", NewsController.delete);

export default router;
