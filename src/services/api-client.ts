import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0f95832966e54157a24d9d74a5660148'
    }
})