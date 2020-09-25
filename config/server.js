const express = require("express");
const path = require("path");
const cors = require("cors");

const routes = require("../routes");

require("../config/dbConnection");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

module.exports = app;
