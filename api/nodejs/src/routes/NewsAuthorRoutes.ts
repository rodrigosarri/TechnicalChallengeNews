import { Router } from "express";
import NewsAuthorController from "../controllers/NewsAuthorController";

const router = Router();

router.post("/news-author", NewsAuthorController.create);
router.get("/news-author", NewsAuthorController.getAll);
router.get("/news-author/:uuid", NewsAuthorController.getById);
router.put("/news-author/:uuid", NewsAuthorController.update);
router.delete("/news-author/:uuid", NewsAuthorController.delete);

export default router;
