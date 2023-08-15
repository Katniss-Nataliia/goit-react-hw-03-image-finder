import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['x-api-key'] = '37619405-9719ac033b63a10770946e8e1';

export const fetchImages = () => {
    const response = axios.get('/gallery');
    return response.data;
}