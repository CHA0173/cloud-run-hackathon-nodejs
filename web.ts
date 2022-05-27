import express from "express";
const app = express();
import bodyParser from "body-parser";
import { apiController } from "./controller";

app.use(bodyParser.json());

app.get("/", apiController.get);

app.post("/", apiController.post);

app.listen(process.env.PORT || 8080);
