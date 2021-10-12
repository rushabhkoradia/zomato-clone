// Libraries
import express from 'express';

// DB Model
import { ImageModel } from '../../database/allModels';

const Router = express.Router();

// AWS S3 Bucket config
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "ap-south-1"
});

/*
|=====================================================================|
| Route       | /                                                     |
| Description | Uploading image -> S3 Bucket & saving file -> MONGODB |
| Params      | None                                                  |
| Access      | Public                                                |
| Method      | POST                                                  |
|=====================================================================|
*/

Router.post("/", async (req, res) => {
    try {
        const 
    }
    catch(error) {
        return res.json({ error: error.message });
    }
});

export default Router;