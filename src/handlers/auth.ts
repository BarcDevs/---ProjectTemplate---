import store from '@/store'
import {getCsrfToken, getMe, login, logout, signup} from '@/api/auth.ts'
import {loginAction, logoutAction} from '@/store/authSlice.ts'
import {LoginSchema} from '@/validations/forms/loginSchema.ts'
import {SignupSchema} from '@/validations/forms/signupSchema.ts'

export const handleLogin = async (credentials: LoginSchema) => {
    const res = await login(credentials)
    if (!res.token) return false

    getMe().then((user) =>
        store.dispatch(loginAction(user)))
    return true
}

export const handleSignup = async (
    userData: Omit<SignupSchema, 'confirmPassword'> & { confirmPassword?: string }) => {
    delete userData.confirmPassword
    const res = await signup(userData)

    return !!res.user
}

export const refreshAuthData = async () => {
    const token = await getCsrfToken()
    if (!token) return false

    getMe().then(user =>
        store.dispatch(loginAction(user)))
    return true
}

export const handleLogout = async () => {
    await logout()

    store.dispatch(logoutAction())
}
