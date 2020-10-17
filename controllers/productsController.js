const Product = require("../models/Product");

module.exports = {
  async getProducts(req, res) {
    const { product_id } = req.params;
    let products;
    if (product_id) {
      products = await Product.findById(product_id);
    } else {
      products = await Product.find();
    }
    res.json(products);
  },

  async addProduct(req, res) {
    const { title, price, discount, description, category, image } = req.body;

    const product = await Product.create({
      title,
      price,
      discount,
      description,
      category,
      image,

    });
    res.json(product);
  },

  async getProductsByCategory(req, res) {
    const { category } = req.params;
    const products = await Product.find({ category });
    res.json(products);
  },

  async getProductsByName(req, res) {
    const { title } = req.params;
    const products = await Product.find({
      title: { $regex: "^" + title, $options: "i" },
    })
      .select("title")
      .limit(5);
    res.json(products);
  },

  async getProductsWithDiscount(req, res) {
    const { category } = req.params;
    let products;
    if (category) {
      products = await Product.find({
        $and: [{ category }, { discount: { $gt: 0 } }],
      }).sort({ discount: -1 });
    } else {
      products = await Product.find({ discount: { $gt: 0 } }).sort({
        discount: -1,
      });
    }
    res.json(products);
  },
};
