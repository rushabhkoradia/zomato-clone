import joi from 'joi';

// Restaurant Id is already validated in /server/validation/food.js

export const ValidateRestaurantCity = (resCity) => {
    const Schema = joi.object({
        city: joi.string().required()
    });
    return Schema.validateAsync(resCity);
};

export const ValidateRestaurantSearchString = (resSearch) => {
    const Schema = joi.object({
        searchString: joi.string().required()
    });
    return Schema.validateAsync(resSearch);
};