/**
 * @jest-environment node
 */

import ncat from '../src/ncat';
import { MissingRequiredQueryParameter, InvalidQueryParameter } from '../src/errors';

describe('LLH Service', () => {
    const VALID_REQUEST = {
        lat: 40.0,
        lon: -80.0,
        inDatum: 'nad83(1986)',
        outDatum: 'nad83(2011)'
    };

    it('cannot make a request without the required fields', () => {
        Object.keys(VALID_REQUEST)
            .forEach(parameter => {
                let currentRequest = { ...VALID_REQUEST };
                delete currentRequest[parameter];

                expect(() => ncat.LLHServiceRequest(currentRequest))
                    .toThrowError(MissingRequiredQueryParameter);
            });
    });

    it('can validate raise exceptions for non-required fields', () => {
        let currentRequest = { ...VALID_REQUEST };
        currentRequest['eht'] = 'not a valid float';

        expect(() => ncat.LLHServiceRequest(currentRequest))
            .toThrowError(InvalidQueryParameter);
    });

    it('should return a valid response if the required fields are included', () => {
        return ncat.LLHServiceRequest(VALID_REQUEST).then(data => {
            expect(data).toHaveProperty('ID');
        });
    });

    it ('should return a rejected promise if the request is bad', () => {
        const invalidLatitude = -800000000000000;

        let currentRequest = { ...VALID_REQUEST };
        currentRequest['lat'] = invalidLatitude;

        return ncat.LLHServiceRequest(currentRequest).catch(error => {
            expect(error).toBe('Invalid latitude');
        });
    });
});

describe('SPC Service', () => {
    const VALID_REQUEST = {
        spcZone: 2402,
        inDatum: 'nad83(2011)',
        outDatum: 'nad83(NSRS2007)',
        northing: '173099.419',
        easting: '503626.812'
    };

    it('cannot make a request without the required fields', () => {
        Object.keys(VALID_REQUEST)
            .forEach(parameter => {
                let currentRequest = { ...VALID_REQUEST };
                delete currentRequest[parameter];

                expect(() => ncat.SPCServiceRequest(currentRequest))
                    .toThrowError(MissingRequiredQueryParameter);
            });
    });

    it('can raise exceptions for non-required fields', () => {
        let currentRequest = { ...VALID_REQUEST };
        currentRequest['eht'] = 'not a valid float';

        expect(() => ncat.SPCServiceRequest(currentRequest))
            .toThrowError(InvalidQueryParameter);
    });

    it('should return a valid response if the required fields are included', () => {
        return ncat.SPCServiceRequest(VALID_REQUEST).then(data => {
            expect(data).toHaveProperty('ID');
        });
    });

    it ('should return a rejected promise if the request is bad', () => {
        const invalidEasting = -800000000000000;

        let currentRequest = { ...VALID_REQUEST };
        currentRequest['easting'] = invalidEasting;

        return ncat.SPCServiceRequest(currentRequest).catch(error => {
            expect(error).toBe('Invalid easting coordinate');
        });
    });
});

describe('UTM Service', () => {
    const VALID_REQUEST = {
        inDatum: 'NAD83(2011)',
        outDatum: 'NAD83(NSRS2007)',
        utmZone: 15,
        northing: 4138641.144,
        easting: 547883.655
    };

    it('cannot make a request without the required fields', () => {
        Object.keys(VALID_REQUEST)
            .forEach(parameter => {
                let currentRequest = { ...VALID_REQUEST };
                delete currentRequest[parameter];

                expect(() => ncat.UTMServiceRequest(currentRequest))
                    .toThrowError(MissingRequiredQueryParameter);
            });
    });

    it('can raise exceptions for non-required fields', () => {
        let currentRequest = { ...VALID_REQUEST };
        currentRequest['eht'] = 'not a valid float';

        expect(() => ncat.UTMServiceRequest(currentRequest))
            .toThrowError(InvalidQueryParameter);
    });

    it('should return a valid response if the required fields are included', () => {
        return ncat.UTMServiceRequest(VALID_REQUEST).then(data => {
            expect(data).toHaveProperty('ID');
        });
    });

    it ('should return a rejected promise if the request is bad', () => {
        const invalidEasting = -800000000000000;

        let currentRequest = { ...VALID_REQUEST };
        currentRequest['easting'] = invalidEasting;

        return ncat.UTMServiceRequest(currentRequest).catch(error => {
            expect(error).toBe('Invalid easting coordinate');
        });
    });
});

describe('XYZ Service', () => {
    const VALID_REQUEST = {
        inDatum: 'NAD83(2011)',
        outDatum: 'NAD83(NSRS2007)',
        x: -217687.279,
        y: -5069012.406,
        z: 3852223.048
    };

    /*
    ** The XYZ Service currently does not have a test to check for required parameters
    ** because the validation is conditional (see the note in src/schemas/XYZ.js).
    ** The validation for XYZ service is complex enough where the test can't even be trusted.
    ** For the purposes of this library, all of the required fields listed in the docs
    ** will be considered necessary despite the fact that requests to the XYZ service
    ** can be made without out required parameters.
    */

    it('can raise exceptions for non-required fields', () => {
        let currentRequest = { ...VALID_REQUEST };
        currentRequest['a'] = 'not a valid float';

        expect(() => ncat.XYZServiceRequest(currentRequest))
            .toThrowError(InvalidQueryParameter);
    });

    it('should return a valid response if the required fields are included', () => {
        return ncat.XYZServiceRequest(VALID_REQUEST).then(data => {
            expect(data).toHaveProperty('ID');
        });
    });

    it ('should return a rejected promise if the request is bad', () => {
        const invalidXCoordinate = -800000000000000;

        let currentRequest = { ...VALID_REQUEST };
        currentRequest['x'] = invalidXCoordinate;

        return ncat.XYZServiceRequest(currentRequest).catch(error => {
            expect(error).toBe('Invalid x coordinate');
        });
    });
});

describe('USNG Service', () => {
    const VALID_REQUEST = {
        usng: '15SWB4788338641',
        inDatum: 'NAD83(2011)',
        outDatum: 'NAD83(NSRS2007)'
    };

    /*
    ** The USNG Service currently does not have a test to check for required parameters
    ** because the validation is conditional. See the notes above for the XYZ service tests
    ** for more information on why the required parameters test for the USNG service is
    ** not here.
    */

    it('can raise exceptions for non-required fields', () => {
        let currentRequest = { ...VALID_REQUEST };
        currentRequest['eht'] = 'not a valid float';

        expect(() => ncat.USNGServiceRequest(currentRequest))
            .toThrowError(InvalidQueryParameter);
    });

    it('should return a valid response if the required fields are included', () => {
        return ncat.USNGServiceRequest(VALID_REQUEST).then(data => {
            expect(data).toHaveProperty('ID');
        });
    });

    it ('should return a rejected promise if the request is bad', () => {
        const invalidInverseFlattening = -800000000000000;

        let currentRequest = { ...VALID_REQUEST };
        currentRequest['invf'] = invalidInverseFlattening;

        return ncat.USNGServiceRequest(currentRequest).catch(error => {
            expect(error).toBe('Invalid inverse flattening');
        });
    });
});
