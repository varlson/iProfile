import { Request, Response, Router } from "express";
import { credentialsVerifier } from "../utils/utils";
import UserModel from "../models/user";
import bcrypt from "bcrypt";
import { createUser, editUser, listUser } from "../middleware/user.middleware";
const router = Router();

router.get("/api", (req: Request, res: Response) => {
  return res.status(200).json({
    msg: "api route",
  });
});

router.post("/register", createUser, (req: Request, res: Response) => {});

router.put("/edit-user/:id", editUser, (req: Request, res: Response) => {});
router.get("/get-users/", listUser, (req: Request, res: Response) => {});

export default router;
