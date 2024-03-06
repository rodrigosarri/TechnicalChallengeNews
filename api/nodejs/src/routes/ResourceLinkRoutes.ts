import { Router } from "express";
import ResourceLinkController from "../controllers/ResourceLinkController";

const router = Router();

router.post("/resource-link", ResourceLinkController.create);
router.get("/resource-link", ResourceLinkController.getAll);
router.get("/resource-link/:uuid", ResourceLinkController.getById);
router.put("/resource-link/:uuid", ResourceLinkController.update);
router.delete("/resource-link/:uuid", ResourceLinkController.delete);

export default router;
