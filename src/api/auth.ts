import {api, handleAxiosError} from '@/api/index.ts'
import {Response} from '@/types/responses'
import {CsrfResponse, LoginResponse, SignupResponse, UserResponse} from '@/types/responses/auth.ts'
import {SignupSchema} from '@/validations/forms/signupSchema.ts'
import {LoginSchema} from '@/validations/forms/loginSchema.ts'

export const login = async (credentials: LoginSchema) => {
    const res =
        await api.post<Response<LoginResponse>>('/auth/login', credentials)
            .catch(e => handleAxiosError(e))

    return res.data.data
}


export const signup = async (userData: Omit<SignupSchema, 'confirmPassword'>) => {
    const res =
        await api.post<Response<SignupResponse>>('/auth/signup', userData)
            .catch(e => handleAxiosError(e))

    return res.data.data
}


export const logout = async () =>
    await api.get('/auth/logout')
        .catch(e => handleAxiosError(e))

export const getCsrfToken = async () => {
    const res =
        await api.get<Response<CsrfResponse>>('/auth/csrf')
            .catch(e => handleAxiosError(e))

    return res.data.data._csrf
}

export const getMe = async () => {
    const res =
        await api.get<Response<UserResponse>>('/auth/me')
            .catch(e => handleAxiosError(e))

    return res.data.data.user
}
