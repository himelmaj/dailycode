import "server-only";

import axios from 'axios';
import { STRAPI_URL, STRAPI_TOKEN } from '@/config/env';

const axiosInstance = axios.create({
    baseURL: `${STRAPI_URL}/api`,
    headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json',
    },
    timeout: 10000,
    timeoutErrorMessage: 'Request Timeout',
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;