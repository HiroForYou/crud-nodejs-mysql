import express from "express";
import path from "path";
import morgan from "morgan";
import bodyParser from "body-parser";

import clientRoutes from "./routes/client.routes.js";
import clientTypeRoutes from "./routes/clientType.routes.js";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// parse JSON inputs
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// middlewares
app.use(morgan("dev"));
//app.use(express.urlencoded({ extended: false }));

// routes
app.use(clientRoutes);
app.use(clientTypeRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

// starting the server
export default app;
