import axios from 'axios';
const KEY = 'AIzaSyBFFilLxBo9Ba8Ed8hrX1J8ztqsdpX_JY4'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
})