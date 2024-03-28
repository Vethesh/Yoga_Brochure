import express from "express";
import pkg from "body-parser";
const { json: _json, urlencoded } = pkg;
import cors from "cors";

import Route from "./Routes/Route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

app.use("/api/v1/insert", Route);
app.use("/api/v1/get", Route);
app.use("/api/v1/files", Route);
app.use("/api/v1/getf", Route);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
