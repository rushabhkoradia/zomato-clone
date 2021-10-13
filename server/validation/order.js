import joi from 'joi';

export const ValidateOrderId = (orderId) => {
    const Schema = joi.object({
        _id: joi.string().required()
    });
    return Schema.validateAsync(orderId);
};

export const ValidateOrderDetails = (orderDetail) => {
    const Schema = joi.object({
        orderDetails: joi.array().items(joi.object({ quantity: joi.number(), paymode: joi.string() }))
    });
    return Schema.validateAsync(orderDetail);
};