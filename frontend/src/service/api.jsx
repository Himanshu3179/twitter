import { useStore } from '../store'
import axios from 'axios'

const BASE_URL = "http://localhost:4000/"




export const login = async (email, password) => {
    const response = await axios.post(`${BASE_URL}api/user/login`, {
        email,
        password
    })
    return response.data
}

export const signup = async (username, email, password) => {
    const response = await axios.post(`${BASE_URL}api/user/signup`, {
        username,
        email,
        password
    })
    return response.data
}



export const verifyToken = async (token) => {
    const response = await axios.post(`${BASE_URL}api/user/verify`,
        { token },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    return response.data
}
