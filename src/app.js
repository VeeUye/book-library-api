const express = require("express");

const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger.json");
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = app;
