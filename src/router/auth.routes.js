import { Router } from "express";
import {signin} from "../controllers/auth.controller.js";
import {signup} from "../controllers/auth.controller.js";
import {signout} from "../controllers/auth.controller.js";
import {profile} from "../controllers/auth.controller.js";

const router = Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/signout", signout);

router.get("/profile", profile);

export default router;