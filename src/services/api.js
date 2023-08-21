import axios from "axios";

const baseURL = 'https://pixabay.com/api/';
const myAPIKey = '37619405-9719ac033b63a10770946e8e1';

export const fetchImages = async () => {
    (await axios.get(`${baseURL}?key=${myAPIKey}&image_type=photo&orientation=horizontal&per_page=12`)).
    then(response =>{
        return response.data
    }).catch(err => {
        console.log(err);
    })
}
