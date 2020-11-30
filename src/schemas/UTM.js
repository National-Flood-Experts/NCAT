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
    utmZone: {
        required: true,
        validator: value => {
            return parseInt(value) === Number(value) && value.toString().length === 2
        }
    },
    hemi: {
        required: false,
        validator: value => HEMISPEHERE.includes(value.toLowerCase())
    },
    inDatum: {
        required: true,
        validator: value => HORIZONTAL_DATUM.includes(value.toLowerCase())
    },
    outDatum: {
        required: true,
        validator: value => HORIZONTAL_DATUM.includes(value.toLowerCase())
    },
    a: {
        required: false,
        validator: value => parseFloat(value) == Number(value)
    },
    invf: {
        required: false,
        validator: value => parseFloat(value) == Number(value)
    },
    spcZone: {
        /*
        ** The documentation says that spcZone is a required field for UTM Service request,
        ** yet requests can be made without it. Because of this, the field is not required.
        ** See the docs for more information: https://www.ngs.noaa.gov/web_services/ncat/utm-service.shtml
        */
        required: false,
        validator: value => {
            return parseInt(value) === Number(value) && value.toString().length === 4
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
