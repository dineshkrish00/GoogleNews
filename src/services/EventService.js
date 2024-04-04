import axios from 'axios'

const baseApiClient = axios.create(
    {
        baseURL : 'http://localhost:2901',
        withCredentials : false, // this is the default
        header : {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    }
)

export default {
    getBranchDetails(data) {
        return baseApiClient.put('/profile', data, "")
    }
}