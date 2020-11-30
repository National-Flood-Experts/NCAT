import { HORIZONTAL_DATUM, VERTICAL_DATUM } from '../constants.js';

export default {
    lat: {
        required: true,
        validator: value => parseFloat(value) == Number(value),
    },
    lon: {
        required: true,
        validator: value => parseFloat(value) == Number(value),
    },
    eht: {
        required: false,
        validator: value => parseFloat(value) == Number(value),
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
        required: false,
        validator: value => {
            return parseInt(value) == Number(value) && value.toString().length == 4
        }
    },
    utmZone: {
        required: false,
        validator: value => {
            return parseInt(value) == Number(value) && value.toString().length == 4
        }
    },
    a: {
        required: false,
        validator: value => parseFloat(value) == Number(value)
    },
    invf: {
        required: false,
        validator: value => parseFloat(value) == Number(value)
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
