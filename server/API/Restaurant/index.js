import { RestaurantModel } from '../../database/allModels';

const Router = express.Router();

/*
|===========================================|
| Route       | /                           |
| Description | Get all Restaurant details  |
| Params      | None                        |
| Access      | Public                      |
| Method      | GET                         |
|===========================================|
*/

Router.get("/", async (req, res) => {
    try {
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city });
        return res.json({ restaurants });
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
|======================================================|
| Route       | /                                      |
| Description | Get specific Restaurant details on id  |
| Params      | _id                                    |
| Access      | Public                                 |
| Method      | GET                                    |
|======================================================|
*/

Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const restaurant = await RestaurantModel.fondOne(_id);

        if(!restaurant)
            return res.status(404).json({ error: "Restaurant not found" });
        
        return res.json({ restaurant });
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
|=================================================|
| Route       | /                                 |
| Description | Get Restaurant details on search  |
| Params      | NONE                              |
| Body        | SearchString                      |
| Access      | Public                            |
| Method      | GET                               |
|=================================================|
*/

Router.get("/search", async (req, res) => {
    try {
        const { searchString } = req.body;
        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" }
        })
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;