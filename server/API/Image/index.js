// Libraries
import express from 'express';
import AWS from 'aws-sdk';
import multer from 'multer';

// DB Model
import { ImageModel } from '../../database/allModels';

// Utilities
import { s3Upload } from '../../Utils/AWS/s3';

const Router = express.Router();

// Multer Storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
|=====================================================================|
| Route       | /                                                     |
| Description | Uploading image -> S3 Bucket & saving file -> MONGODB |
| Params      | None                                                  |
| Access      | Public                                                |
| Method      | POST                                                  |
|=====================================================================|
*/

Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        //S3 bucket options
        const bucketOptions = {
            Bucket: "food-delivery-web-app",
            Key: file.originalname,
            Body: file.buffer,
            contentType: file.mimeType,
            ACL: "public-read"
        };

        const uploadImage = await s3Upload(bucketOptions);
        res.status(200).json({ uploadImage });
    }
    catch(error) {
        return res.json({ error: error.message });
    }
});

export default Router;