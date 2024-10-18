// @ts-check

import { Router } from "express";
import { resolve } from "path";

const router = Router();
const __dirname = resolve();

router.get("/", (req, res) => {
    console.log(`Path: ${resolve("public", "pages", "index", "index.html")}`);
    res.sendFile(resolve("public", "pages", "index", "index.html"));
});

export { router };
