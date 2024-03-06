import { Router } from "express";
import NewsMetadataController from "../controllers/NewsMetadataController";

const router = Router();

router.post("/news-metadata", NewsMetadataController.create);
router.get("/news-metadata", NewsMetadataController.getAll);
router.get("/news-metadata/:uuid", NewsMetadataController.getById);
router.put("/news-metadata/:uuid", NewsMetadataController.update);
router.post("/news-metadata/increment-view", NewsMetadataController.incrementView);
router.post("/news-metadata/increment-share", NewsMetadataController.incrementShare);
router.delete("/news-metadata/:uuid", NewsMetadataController.delete);

export default router;
