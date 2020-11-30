import validators from './validators';

export default {
    lat: {
        required: true,
        validator: validators.lat
    },
    lon: {
        required: true,
        validator: validators.lon
    },
    eht: {
        required: false,
        validator: validators.eht
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
        required: false,
        validator: validators.spcZone
    },
    utmZone: {
        required: false,
        validator: validators.utmZone
    },
    a: {
        required: false,
        validator: validators.a
    },
    invf: {
        required: false,
        validator: validators.invf
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
