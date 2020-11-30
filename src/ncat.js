import axios from 'axios';
import LLHSchema from './schemas/LLH';
import validate from './validate';
import utils from './utils';

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

function LLHServiceRequest(queryParameters) {
    validate(queryParameters, LLHSchema);
    let queryString = utils.buildQueryString(queryParameters);

    return getNCATAxiosInstance()
        .get('llh' + queryString)
        .then(response => {
            let data = response.data;

            if ('error' in data) {
                return Promise.reject(data.error);
            }

            return data;
        });
}

export default { LLHServiceRequest }
