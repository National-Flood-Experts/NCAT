import validators from './validators';

export default {
    x: {
        required: true,
        validator: validators.x
    },
    y: {
        required: true,
        validator: validators.y
    },
    z: {
        required: true,
        validator: validators.z
    },
    inDatum: {
        /*
        ** See the note on outDatum below. The same applies to inDatum.
        */
        required: true,
        validator: validators.inDatum
    },
    outDatum: {
        /*
        ** The documentation says that outDatum is a required field for a XYZ Service request,
        ** yet requests can be made without it; however even though requests can be made without it,
        ** a lot of the data returned will just be N/A. This is just a note to basically say that
        ** while it's not needed to make a request, it is needed to return useful data.
        ** Whether or not it's required depends on the type of request being made. As an example,
        ** the following request will work despite not having an outDatum:
        ** https://www.ngs.noaa.gov/api/ncat/xyz?inDatum=nad83(2011)&x=-217687.279&y=-5069012.406&z=3852223.048
        **
        ** See the docs for more information: https://www.ngs.noaa.gov/web_services/ncat/xyz-service.shtml
        */
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
    }
}
