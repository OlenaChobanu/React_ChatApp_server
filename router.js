import Router from "express";
import UserController from "./UserController.js";

const router = new Router();

router.post("/allChatUsers", UserController.create);
router.get("/allChatUsers", UserController.getAll);
router.get("/allChatUsers/:id", UserController.getOne);
router.put("/allChatUsers", UserController.update);
router.delete("/allChatUsers/:id", UserController.delete);

export default router;
