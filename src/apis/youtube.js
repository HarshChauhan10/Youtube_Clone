import axios from 'axios'

const KEY = 'AIzaSyBxmY008vUd-aq0tp90VJnlCvK2tsBQsEw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
}); 