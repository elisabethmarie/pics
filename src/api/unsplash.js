import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 1a143f1d7eade5bceec69828ae414330ec4960b923543fb6e6cac64e9020a46e'
    }
});