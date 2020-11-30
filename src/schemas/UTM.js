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
    utmZone: {
        required: true,
        validator: validators.utmZone
    },
    hemi: {
        required: false,
        validator: validators.hemi
    },
    inDatum: {
        required: true,
        validator: validators.inDatum
    },
    outDatum: {
        required: true,
        validator: validators.outDatum
    },
    a: {
        required: false,
        validator: validators.a
    },
    invf: {
        required: false,
        validator: validators.invf
    },
    spcZone: {
        /*
        ** The documentation says that spcZone is a required field for UTM Service request,
        ** yet requests can be made without it. Their first example even shows a request
        ** being made without a spcZone specified. Because of this, the field is not required here.
        ** See the docs for more information: https://www.ngs.noaa.gov/web_services/ncat/utm-service.shtml
        */
        required: false,
        validator: validators.spcZone
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
