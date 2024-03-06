import { Router } from "express";
import SocialMediaController from "../controllers/SocialMediaController";

const router = Router();

router.post("/social-media", SocialMediaController.create);
router.get("/social-media", SocialMediaController.getAll);
router.get("/social-media/:uuid", SocialMediaController.getById);
router.put("/social-media/:uuid", SocialMediaController.update);
router.delete("/social-media/:uuid", SocialMediaController.delete);

export default router;
