import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:2025'
})

export default api