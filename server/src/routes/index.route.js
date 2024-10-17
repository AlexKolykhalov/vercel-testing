// @ts-check

import { Router } from "express";
import { resolve } from "path";

const router = Router();
const __dirname = resolve();

router.get("/", (req, res) => {
    res.sendFile(resolve(__dirname, "..", "client", "pages", "index", "index.html"));
});

export { router };
