import axios from 'axios'

const key = process.env.REACT_APP_NEWS_API_KEY;

let newsApi = axios.create({
    headers: {
        'authorization': key.toString()
    }
});

export default newsApi;
