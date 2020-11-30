import axios from 'axios';
import LLHSchema from './schemas/LLH';
import validate from './validate';

class NCAT {
    static axios = axios.create({
        baseURL: "https://geodesy.noaa.gov/api/ncat/",
        responseType: 'json',
        withCredentials: false
    });

    static llhServiceRequest(queryParameters) {
        validate(queryParameters, LLHSchema);
    }
}

export default NCAT;
