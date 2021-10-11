// Libraries
import express from "express";

// DB Model
import { MenuModel, ImageModel } from '../../database/allModels';

const Router = express.Router();

/*
|========================================================|
| Route       | /menu                                    | 
| Description | Get Menu details of specific Restaurant  |
| Params      | _id                                      |
| Body        | SearchString                             |
| Access      | Public                                   |
| Method      | GET                                      |
|========================================================|
*/

Router.get("/menu/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await MenuModel.findOne(_id);
        return res.json({ menus });
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
|======================================|
| Route       | /image                 | 
| Description | Get Menu Images on id  |
| Params      | _id                    |
| Body        | SearchString           |
| Access      | Public                 |
| Method      | GET                    |
|======================================|
*/

Router.get("/image/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await ImageModel.findOne(_id);
        return res.json({ menus });
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;