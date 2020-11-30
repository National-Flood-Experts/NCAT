import { MissingRequiredQueryParameter, InvalidQueryParameter } from './errors';

const validateField = (object, schema, key) => {
    return schema[key].validator(object[key]);
}

export default (object, schema) => Object
    .keys(schema)
    .forEach(key => {
        if (schema[key].required && !(key in object)) {
            throw new MissingRequiredQueryParameter(`Missing '${key}' from query parameters`);
        }
        else if (!schema[key].required && !(key in object)) {
            return;
        }

        if (!validateField(object, schema, key)) {
            throw new InvalidQueryParameter(`${key} is invalid.`);
        }
    });
