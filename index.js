// @ts-check

import express from "express";
import { resolve } from "path";
import { router } from "./src/routes/index.route.js";

const app = express();
const port = 3000;

app.use(express.static(resolve(resolve("public"))));
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
