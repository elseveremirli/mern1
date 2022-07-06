import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://new-mern-app2.herokuapp.com"
})