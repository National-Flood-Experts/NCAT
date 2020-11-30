import axios from 'axios';
import validate from './validate';
import utils from './utils';

// Schemas
import LLHSchema from './schemas/LLH';
import SPCSchema from './schemas/SPC';

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

function LLHServiceRequest(queryParameters) {
    let serviceRequest = makeServiceRequest(LLHSchema, 'llh');
    return serviceRequest(queryParameters);
}

function SPCServiceRequest(queryParameters) {
    let serviceRequest = makeServiceRequest(SPCSchema, 'spc');
    return serviceRequest(queryParameters);
}

export default {
    LLHServiceRequest,
    SPCServiceRequest
}
