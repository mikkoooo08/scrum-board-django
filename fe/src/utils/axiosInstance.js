import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.API_URL
const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Authorization': `Token ${Cookies.get('session')}`
    }
});

export default axiosInstance