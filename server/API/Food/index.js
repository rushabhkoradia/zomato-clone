// Libraries
import express from 'express';

// DB Model
import { FoodModel } from '../../database/allModels';

import { ValidateRestaurantId, ValidateRestaurantCategory } from '../../validation/food';

const Router = express.Router();

/*
|========================================================|
| Route       | /                                        | 
| Description | Get Food details of specific Restaurant  |
| Params      | _id                                      |
| Body        | SearchString                             |
| Access      | Public                                   |
| Method      | GET                                      |
|========================================================|
*/

Router.get("/:_id", async (req, res) => {
    try {
        await ValidateRestaurantId(req.params);
        const { _id } = req.params;
        const foods = await FoodModel.find({ restaurant: _id });
        return res.json({ foods });
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
|======================================================|
| Route       | /c                                     | 
| Description | Get Food details on specific Category  |
| Params      | category                               |
| Access      | Public                                 |
| Method      | GET                                    |
|======================================================|
*/

Router.get("/c/:category", async (req, res) => {
    try {
        await ValidateRestaurantCategory(req.params);
        const { category } = req.params;
        const foods = await FoodModel.find({
            category: { $regex: category, $options: "i" }
        });
        return res.json({ foods });
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;