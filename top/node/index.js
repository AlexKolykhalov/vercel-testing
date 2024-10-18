// @ts-check

import express from "express";
import path from "path";
import cookieParser from 'cookie-parser';
import db from "./server/src/database/models/index.js";
import router from "./server/src/routes/index.route.js";
import { errorHandler } from "./server/src/middlewares/errorHandler.middleware.js"

// const __rootname = path.resolve(path.resolve(), "..");
const port = process.env.PORT;
const app = express();
// app.use(express.static(path.resolve(__rootname, "client")));
app.use(express.static(path.resolve("top", "node", "client")));
app.use(express.json());
app.use(cookieParser());
app.use(router);
app.use(errorHandler);

try {    
    // await db.sequelize.authenticate();
    app.listen(port, () => console.log(`Server (${process.env.NODE_ENV}) has been started at port: ${port}...`));
} catch (error) {
    console.error(error);
}

