const { orders } = require("../utils/dataStore");

exports.getOrders = (req, res) => {
    res.json(orders);
};

exports.createOrder = (req, res) => {

    const order = {
        id: orders.length + 1,
        userId: req.body.userId,
        items: req.body.items
    };

    orders.push(order);

    res.json(order);
};