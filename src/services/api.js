import axios from "axios";

const baseURL = 'https://pixabay.com/api/';
const myAPIKey = '37619405-9719ac033b63a10770946e8e1';

export const fetchImages = async (topic, page) => {
    try{
        const response = await axios.get(
            `${baseURL}?q=${topic}&page=1&key=${myAPIKey}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
        );
        // Returning the response data (which contains the fetched images)
        return response.data;
    } catch (error) {
        console.log(error);// Handling errors: logging the error and re-throwing it
        throw error; // This will allow the calling code to catch and handle the error
    }
   
};
