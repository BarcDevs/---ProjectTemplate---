import axios, {AxiosError} from 'axios'
import config from '@/config'

export const api = axios.create({
    baseURL: `${config.serverUrl}/api/${config.serverApiVersion}`,
    withCredentials: true
})

export const handleAxiosError = (error: Error) => {
    if (error instanceof AxiosError)
        throw error.response?.data

    throw error
}
