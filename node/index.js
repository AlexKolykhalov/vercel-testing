// @ts-check

import express from "express";
import { resolve } from "path";
import { router } from "./src/routes/index.route.js";

const app = express();
const __dirname = resolve("node");
const port = 3000;

// app.use(express.static(resolve("public")));
// app.use(router);
app.get("/", (req, res) => {
    res.status(200).sendFile(resolve(__dirname, "public", "pages", "index", "index.html")); 
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
