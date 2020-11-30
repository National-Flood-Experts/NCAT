import validators from './validators';

export default {
    usng: {
        requried: true,
        validator: validators.usng
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
    a: {
        required: false,
        validator: validators.a
    },
    invf: {
        required: false,
        validator: validators.invf
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
