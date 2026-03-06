const { products } = require("../utils/dataStore");

exports.getProducts = (req, res) => {
    res.json(products);
};

exports.createProduct = (req, res) => {

    const product = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(product);

    res.json(product);
};

exports.updateProduct = (req, res) => {

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name;
    product.price = req.body.price;

    res.json(product);
};

exports.deleteProduct = (req, res) => {

    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products.splice(index, 1);

    res.json({ message: "Product deleted" });
};