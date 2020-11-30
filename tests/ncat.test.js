import ncat from '../src/ncat';
import { MissingRequiredQueryParameter, InvalidQueryParameter } from '../src/errors';

describe('Latitude-longitude-height service', () => {
    const VALID_REQUEST = {
        lat: '40.0',
        lon: '-80.0',
        inDatum: 'nad83(1986)',
        outDatum: 'nad83(2011)'
    };

    it('cannot make a request without the required fields', () => {
        Object.keys(VALID_REQUEST)
            .forEach(parameter => {
                let currentRequest = { ...VALID_REQUEST };
                delete currentRequest[parameter];

                expect(() => ncat.llhServiceRequest(currentRequest))
                    .toThrowError(MissingRequiredQueryParameter);
            });
    });

    it('can validate raise exceptions for non-required fields', () => {
        let currentRequest = { ...VALID_REQUEST };
        currentRequest['eht'] = 'not a valid float';
        expect(() => ncat.llhServiceRequest(currentRequest))
            .toThrowError(InvalidQueryParameter);
    });
});
