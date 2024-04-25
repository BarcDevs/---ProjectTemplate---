import {useSelector} from 'react-redux'
import {IRootState} from '@/store'
import {User} from '@/types/user'
import {handleLogin, handleLogout, handleSignup} from '@/handlers/auth.ts'
import {LoginSchema} from '@/validations/forms/loginSchema.ts'
import {SignupSchema} from '@/validations/forms/signupSchema.ts'

export const useAuth = () => {
    const isLoggedIn =
        useSelector<IRootState>(state =>
            state.auth.isAuthenticated) as boolean

    const user =
        useSelector<IRootState>(state =>
            state.auth.user) as User | null

    const login = async (credentials: LoginSchema) =>
        await handleLogin(credentials)

    const register = async (data: SignupSchema) =>
        await handleSignup(data)

    const logout = async () =>
        await handleLogout()

    return {
        user,
        isLoggedIn,
        login,
        logout,
        register
    }
}
