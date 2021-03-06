import express from 'express';
import passport from 'passport';
import { OrderModel } from '../../database/allModels'; // DB Model
import { ValidateOrderId, ValidateOrderDetails } from '../../validation/order'; // Validation

const Router = express.Router();

/*
|========================================|
| Route       | /                        |
| Description | Get Orders based on _id  |
| Params      | _id                      |
| Access      | Public                   |
| Method      | GET                      |
|========================================|
*/

Router.get("/:_id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        await ValidateOrderId(req.params);
        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({ user: _id });
        if(!getOrders) return res.status(404).json({ error: error.message });
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
|==============================|
| Route       | /new           |
| Description | Add new Order  |
| Params      | _id            |
| Access      | Public         |
| Method      | POST           |
|==============================|
*/

Router.post("/new/:_id", async (req, res) => {
    try {
        await ValidateOrderId(req.params);
        const { _id } = req.params;
        await ValidateOrderDetails(req.body);
        const { orderDetails } = req.body;

        // Updating new order to MONGOD Database
        const addNewOrder = await OrderModel.findOneAndUpdate({ user: _id }, { $push: { orderDetails: orderDetails } }, { new: true });

        return res.json({ order: addNewOrder });
    }
    catch(error) {
        return res.status(500),json({ error: error.message });
    }
});

export default Router;