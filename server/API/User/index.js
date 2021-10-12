// Libraries
import express from 'express';

// DB Model
import { UserModel } from '../../database/allModels';

const Router = express.Router();

/*
|============================|
| Route       | /            |
| Description | Get an user  |
| Params      | _id          |
| Access      | Public       |
| Method      | GET          |
|============================|
*/

Router.post("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);
        return res.json({ user: getUser });
    }
    catch(error) {
        return res.status(500),json({ error: error.message });
    }
});

/*
|================================|
| Route       | /update          |
| Description | Update User data |
| Params      | _userId          |
| Body        | User Data        |
| Access      | Public           |
| Method      | PUT              |
|================================|
*/

Router.put("/update/:_userId", async (req, res) => {
    try {
        const { _userId } = req.params;
        const { userData } = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(_userId, { $set: userData }, { new: true });
        return res.json({ user: updateUserData });
    }
    catch(error) {
        return res.status(500),json({ error: error.message });
    }
});

export default Router;