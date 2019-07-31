import axios from 'axios'

let newsApi = axios.create({
    headers: {
        'authorization': 'bd90520211e047be9a21b18a94bc970c'
    }
});

export default newsApi;
