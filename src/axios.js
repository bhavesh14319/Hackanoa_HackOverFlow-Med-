import axios from 'axios'

const instance = axios.create({
    baseURL:"http://192.168.215.132:3001",
    // baseURL:"http://192.0.0.1:3001/",
})

export default instance;