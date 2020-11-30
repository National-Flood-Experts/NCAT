export class MissingRequiredQueryParameter extends Error {
    constructor(message) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, MissingRequiredQueryParameter);
        }
    }
}

export class InvalidQueryParameter extends Error {
    constructor(message) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidQueryParameter);
        }
    }
}
