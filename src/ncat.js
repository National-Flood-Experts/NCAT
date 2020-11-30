import axios from 'axios';
import validate from './validate';
import utils from './utils';

// Schemas
import LLHSchema from './schemas/LLH';
import SPCSchema from './schemas/SPC';
import USNGSchema from './schemas/USNG';
import UTMSchema from './schemas/UTM';
import XYZSchema from './schemas/XYZ';

let NCATAxiosInstance = null;

function getNCATAxiosInstance() {
    if (NCATAxiosInstance) {
        return NCATAxiosInstance;
    }

    NCATAxiosInstance = axios.create({
        baseURL: "https://geodesy.noaa.gov/api/ncat/",
        responseType: 'json',
        withCredentials: false
    });

    return NCATAxiosInstance;
}

function makeServiceRequest(schema, endpoint) {
    return (parameters) => {
        validate(parameters, schema);
        let queryString = utils.buildQueryString(parameters);

        return getNCATAxiosInstance()
            .get(endpoint + queryString)
            .then(response => {
                let data = response.data;

                if ('error' in data) {
                    return Promise.reject(data.error);
                }

                return data;
            });
        }
}

const LLH = function LLHServiceRequest(queryParameters) {
    let serviceRequest = makeServiceRequest(LLHSchema, 'llh');
    return serviceRequest(queryParameters);
}

const SPC = function SPCServiceRequest(queryParameters) {
    let serviceRequest = makeServiceRequest(SPCSchema, 'spc');
    return serviceRequest(queryParameters);
}

const UTM = function UTMServiceRequest(queryParameters) {
    let serviceRequest = makeServiceRequest(UTMSchema, 'utm');
    return serviceRequest(queryParameters);
}

const XYZ = function XYZServiceRequest(queryParameters) {
    let serviceRequest = makeServiceRequest(XYZSchema, 'xyz');
    return serviceRequest(queryParameters);
}

const USNG = function USNGServiceRequest(queryParameters) {
    let serviceRequest = makeServiceRequest(USNGSchema, 'usng');
    return serviceRequest(queryParameters);
}

export default {
    LLH,
    SPC,
    UTM,
    XYZ,
    USNG
}
