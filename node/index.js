// @ts-check

import express from "express";
import { resolve } from "path";
import { router } from "./src/routes/index.route.js";

const port = 3000;
const app = express();

app.use(express.static(resolve("public")));
app.use(express.json());
app.use(router);

try {
    app.listen(port, () => {
	console.log(`Server is running on ${port}`);
    });
} catch (error) {
    console.error(error);
}

