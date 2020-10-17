const express = require("express");
const path = require("path");
const cors = require("cors");

const routes = require("../routes");

require("../config/dbConnection");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
