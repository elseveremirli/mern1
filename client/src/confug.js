import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://new-mern-app1.herokuapp.com"
})