import validators from './validators';

export default {
    northing: {
        required: true,
        validator: validators.northing
    },
    easting: {
        required: true,
        validator: validators.easting
    },
    units: {
        required: false,
        validator: validators.units
    },
    inDatum: {
        required: true,
        validator: validators.inDatum
    },
    outDatum: {
        required: true,
        validator: validators.outDatum
    },
    spcZone: {
        required: true,
        validator: validators.spcZone
    },
    utmZone: {
        required: false,
        validator: validators.utmZone
    },
    eht: {
        required: false,
        validator: validators.eht
    },
    inVertDatum: {
        required: false,
        validator: validators.inVertDatum
    },
    outVertDatum: {
        required: false,
        validator: validators.outVertDatum
    },
    orthoHt: {
        required: false,
        validator: validators.orthoHt
    }
}
