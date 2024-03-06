import { Router } from "express";
import MenuController from "../controllers/MenuController";

const router = Router();

router.post("/menu", MenuController.create);
router.get("/menu", MenuController.getAll);
router.get("/menu/:uuid", MenuController.getById);
router.put("/menu/:uuid", MenuController.update);
router.delete("/menu/:uuid", MenuController.delete);

export default router;
