// @ts-check

import { Router } from "express";
import { resolve } from "path";

const router = Router();
const __dirname = resolve("node");

router.get("/", (req, res) => {
    res.status(200).sendFile(resolve(__dirname, "public", "pages", "index", "index.html")); 
});

export { router };
