const express = require("express");
const productsController = require("./controllers/productsController");

const routes = express.Router();

routes.get("/products", productsController.getProducts);
routes.get("/products/:product_id", productsController.getProducts);
routes.get("/products/name/:title", productsController.getProductsByName);
routes.get("/offers", productsController.getProductsWithDiscount);
routes.get("/offers/:category", productsController.getProductsWithDiscount);

routes.post("/products", productsController.addProduct);

routes.get(
  "/products/category/:category",
  productsController.getProductsByCategory
);

module.exports = routes;
