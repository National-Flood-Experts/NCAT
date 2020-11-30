import { HORIZONTAL_DATUM, VERTICAL_DATUM, UNITS } from '../constants.js';

export default {
    northing: {
        required: true,
        validator: value => parseFloat(value) == Number(value),
    },
    easting: {
        required: true,
        validator: value => parseFloat(value) == Number(value),
    },
    units: {
        required: false,
        validator: value => UNITS.includes(value.toLowerCase())
    },
    inDatum: {
        required: true,
        validator: value => HORIZONTAL_DATUM.includes(value.toLowerCase())
    },
    outDatum: {
        required: true,
        validator: value => HORIZONTAL_DATUM.includes(value.toLowerCase())
    },
    spcZone: {
        required: true,
        validator: value => {
            return parseInt(value) === Number(value) && value.toString().length == 4
        }
    },
    utmZone: {
        required: false,
        validator: value => {
            return parseInt(value) === Number(value) && value.toString().length == 4
        }
    },
    eht: {
        required: false,
        validator: value => parseFloat(value) == Number(value),
    },
    inVertDatum: {
        required: false,
        validator: value => VERTICAL_DATUM.includes(value.toLowerCase())
    },
    outVertDatum: {
        required: false,
        validator: value => VERTICAL_DATUM.includes(value.toLowerCase())
    },
    orthoHt: {
        required: false,
        validator: value => parseFloat(value) == Number(value),
    }
}
