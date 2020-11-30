import { HORIZONTAL_DATUM, VERTICAL_DATUM, UNITS, HEMISPEHERE } from '../constants.js';

export default {
    a: value => parseFloat(value) == Number(value),
    easting: value => parseFloat(value) == Number(value),
    eht: value => parseFloat(value) == Number(value),
    hemi: value => HEMISPEHERE.includes(value.toLowerCase()),
    inDatum: value => HORIZONTAL_DATUM.includes(value.toLowerCase()),
    inVertDatum: value => VERTICAL_DATUM.includes(value.toLowerCase()),
    invf: value => parseFloat(value) == Number(value),
    lat: value => parseFloat(value) == Number(value),
    lon: value => parseFloat(value) == Number(value),
    northing: value => parseFloat(value) == Number(value),
    orthoHt: value => parseFloat(value) == Number(value),
    outDatum: value => HORIZONTAL_DATUM.includes(value.toLowerCase()),
    outVertDatum: value => VERTICAL_DATUM.includes(value.toLowerCase()),
    spcZone: value => { return parseInt(value) === Number(value) && value.toString().length === 4 },
    units: value => UNITS.includes(value.toLowerCase()),
    utmZone: value => { return parseInt(value) === Number(value) && value.toString().length === 2 },
    x: value => parseFloat(value) == Number(value),
    y: value => parseFloat(value) == Number(value),
    z: value => parseFloat(value) == Number(value),
}
