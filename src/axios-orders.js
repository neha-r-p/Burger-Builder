import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-71356.firebaseio.com/'
})

export default instance