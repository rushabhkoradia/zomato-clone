import AWS from 'aws-sdk';

// AWS S3 Bucket config
const s3Bucket = new AWS.S3({
    accessKeyId: "AKIAXAH6XPTQ5IRAYTM3",
    secretAccessKey: "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",
    region: "ap-south-1"
});

export const s3Upload = (options) => {
    return new Promise((resolve, reject) =>
        s3Bucket.upload(options, (error, data) => {
            if(error) return reject(error);
            return resolve(data);
        })
    );
};