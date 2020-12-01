/**
 * @jest-environment node
 */

import { MissingRequiredQueryParameter, InvalidQueryParameter } from '../src/errors';

describe('LLH Service', () => {
    beforeEach(() => jest.resetModules());

    const VALID_REQUEST = {
        lat: 40.0,
        lon: -80.0,
        inDatum: 'nad83(1986)',
        outDatum: 'nad83(2011)'
    };

    it('cannot make a request without the required fields', () => {
        const ncat = require('../src/ncat').default;
        Object.keys(VALID_REQUEST)
            .forEach(parameter => {
                let currentRequest = { ...VALID_REQUEST };
                delete currentRequest[parameter];

                expect(() => ncat.LLH(currentRequest))
                    .toThrowError(new MissingRequiredQueryParameter(`Missing '${parameter}' from query parameters`));
            });
    });

    it('can validate raise exceptions for non-required fields', () => {
        const ncat = require('../src/ncat').default;
        const key = 'eht'
        let currentRequest = { ...VALID_REQUEST };
        currentRequest[key] = 'not a valid float';

        expect(() => ncat.LLH(currentRequest)).toThrowError(new InvalidQueryParameter(`${key} is invalid.`));
    });

    it('should return a valid response if the required fields are included', async () => {
        const axios = require('axios');
        const ncat = require('../src/ncat').default;

        await ncat.LLH(VALID_REQUEST).then(data => {
            expect(data).toHaveProperty('ID');
        });
    });

    it ('should return a rejected promise if the request is bad', async () => {
        const axios = require('axios');
        const ncat = require('../src/ncat').default;
        const invalidLatitude = -800000000000000;

        let currentRequest = { ...VALID_REQUEST };
        currentRequest['lat'] = invalidLatitude;

        axios.create.mockImplementationOnce(() => {
            return {
                get: () => { return Promise.reject('Invalid latitude') }
            };
        });

        await ncat.LLH(currentRequest).catch(error => {
            expect(error).toBe('Invalid latitude');
        });
    });
});

describe('SPC Service', () => {
    beforeEach(() => jest.resetModules());

    const VALID_REQUEST = {
        spcZone: 2402,
        inDatum: 'nad83(2011)',
        outDatum: 'nad83(NSRS2007)',
        northing: '173099.419',
        easting: '503626.812'
    };

    it('cannot make a request without the required fields', () => {
        const ncat = require('../src/ncat').default;
        Object.keys(VALID_REQUEST)
            .forEach(parameter => {
                let currentRequest = { ...VALID_REQUEST };
                delete currentRequest[parameter];

                expect(() => ncat.SPC(currentRequest))
                    .toThrowError(new MissingRequiredQueryParameter(`Missing '${parameter}' from query parameters`));
            });
    });

    it('can raise exceptions for non-required fields', async () => {
        const ncat = require('../src/ncat').default;
        const key = 'eht';
        let currentRequest = { ...VALID_REQUEST };
        currentRequest[key] = 'not a valid float';

        expect(() => ncat.SPC(currentRequest)).toThrowError(new InvalidQueryParameter(`${key} is invalid.`));
    });

    it('should return a valid response if the required fields are included', async () => {
        const axios = require('axios');
        const ncat = require('../src/ncat').default;

        await ncat.SPC(VALID_REQUEST).then(data => {
            expect(data).toHaveProperty('ID');
        });
    });

    it ('should return a rejected promise if the request is bad', async () => {
        const axios = require('axios');
        const ncat = require('../src/ncat').default;
        const invalidEasting = -800000000000000;

        let currentRequest = { ...VALID_REQUEST };
        currentRequest['easting'] = invalidEasting;

        axios.create.mockImplementationOnce(() => {
            return {
                get: () => { return Promise.reject('Invalid easting coordinate') }
            };
        });

        await ncat.SPC(currentRequest).catch(error => {
            expect(error).toBe('Invalid easting coordinate');
        });
    });
});

describe('UTM Service', () => {
    beforeEach(() => jest.resetModules());

    const VALID_REQUEST = {
        inDatum: 'NAD83(2011)',
        outDatum: 'NAD83(NSRS2007)',
        utmZone: 15,
        northing: 4138641.144,
        easting: 547883.655
    };

    it('cannot make a request without the required fields', () => {
        const ncat = require('../src/ncat').default;
        Object.keys(VALID_REQUEST)
            .forEach(parameter => {
                let currentRequest = { ...VALID_REQUEST };
                delete currentRequest[parameter];

                expect(() => ncat.UTM(currentRequest))
                    .toThrowError(new MissingRequiredQueryParameter(`Missing '${parameter}' from query parameters`));
            });
    });

    it('can raise exceptions for non-required fields', () => {
        const ncat = require('../src/ncat').default;
        const key = 'eht';
        let currentRequest = { ...VALID_REQUEST };
        currentRequest[key] = 'not a valid float';

        expect(() => ncat.UTM(currentRequest)).toThrowError(new InvalidQueryParameter(`${key} is invalid.`));
    });

    it('should return a valid response if the required fields are included', async () => {
        const axios = require('axios');
        const ncat = require('../src/ncat').default;

        await ncat.UTM(VALID_REQUEST).then(data => {
            expect(data).toHaveProperty('ID');
        });
    });

    it ('should return a rejected promise if the request is bad', async () => {
        const axios = require('axios');
        const ncat = require('../src/ncat').default;
        const invalidEasting = -800000000000000;

        let currentRequest = { ...VALID_REQUEST };
        currentRequest['easting'] = invalidEasting;

        axios.create.mockImplementationOnce(() => {
            return {
                get: () => { return Promise.reject('Invalid easting coordinate') }
            };
        });

        await ncat.UTM(currentRequest).catch(error => {
            expect(error).toBe('Invalid easting coordinate');
        });
    });
});

describe('XYZ Service', () => {
    beforeEach(() => jest.resetModules());

    const VALID_REQUEST = {
        inDatum: 'NAD83(2011)',
        outDatum: 'NAD83(NSRS2007)',
        x: -217687.279,
        y: -5069012.406,
        z: 3852223.048
    };

    it('cannot make a request without the required fields', () => {
        const ncat = require('../src/ncat').default;
        Object.keys(VALID_REQUEST)
            .forEach(parameter => {
                let currentRequest = { ...VALID_REQUEST };
                delete currentRequest[parameter];

                expect(() => ncat.XYZ(currentRequest))
                    .toThrowError(new MissingRequiredQueryParameter(`Missing '${parameter}' from query parameters`));
            });
    });

    it('can raise exceptions for non-required fields', () => {
        const ncat = require('../src/ncat').default;
        let currentRequest = { ...VALID_REQUEST };
        const key = 'a';
        currentRequest[key] = 'not a valid float';

        expect(() => ncat.XYZ(currentRequest)).toThrowError(new InvalidQueryParameter(`${key} is invalid.`));
    });

    it('should return a valid response if the required fields are included', async () => {
        const axios = require('axios');
        const ncat = require('../src/ncat').default;

        await ncat.XYZ(VALID_REQUEST).then(data => {
            expect(data).toHaveProperty('ID');
        });
    });

    it ('should return a rejected promise if the request is bad', async () => {
        const axios = require('axios');
        const ncat = require('../src/ncat').default;
        const invalidXCoordinate = -800000000000000;

        let currentRequest = { ...VALID_REQUEST };
        currentRequest['x'] = invalidXCoordinate;

        axios.create.mockImplementationOnce(() => {
            return {
                get: () => { return Promise.reject('Invalid x coordinate') }
            };
        });

        await ncat.XYZ(currentRequest).catch(error => {
            expect(error).toBe('Invalid x coordinate');
        });
    });
});

describe('USNG Service', () => {
    beforeEach(() => jest.resetModules());

    const VALID_REQUEST = {
        usng: '15SWB4788338641',
        inDatum: 'NAD83(2011)',
        outDatum: 'NAD83(NSRS2007)'
    };

    it('cannot make a request without the required fields', () => {
        const ncat = require('../src/ncat').default;
        Object.keys(VALID_REQUEST)
            .forEach(parameter => {
                let currentRequest = { ...VALID_REQUEST };
                delete currentRequest[parameter];

                expect(() => ncat.USNG(currentRequest))
                    .toThrowError(new MissingRequiredQueryParameter(`Missing '${parameter}' from query parameters`));
            });
    });

    it('can raise exceptions for non-required fields', () => {
        const ncat = require('../src/ncat').default;
        let currentRequest = { ...VALID_REQUEST };
        const key = 'eht';
        currentRequest[key] = 'not a valid float';

        expect(() => ncat.USNG(currentRequest)).toThrowError(new InvalidQueryParameter(`${key} is invalid.`));
    });

    it('should return a valid response if the required fields are included', async () => {
        const axios = require('axios');
        const ncat = require('../src/ncat').default;

        await ncat.USNG(VALID_REQUEST).then(data => {
            expect(data).toHaveProperty('ID');
        });
    });

    it ('should return a rejected promise if the request is bad', async () => {
        const axios = require('axios');
        const ncat = require('../src/ncat').default;
        const invalidInverseFlattening = -800000000000000;

        let currentRequest = { ...VALID_REQUEST };
        currentRequest['invf'] = invalidInverseFlattening;

        axios.create.mockImplementationOnce(() => {
            return {
                get: () => { return Promise.reject('Invalid inverse flattening') }
            };
        });

        await ncat.USNG(currentRequest).catch(error => {
            expect(error).toBe('Invalid inverse flattening');
        });
    });
});
