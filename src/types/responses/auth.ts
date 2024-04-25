import {User} from '@/types/user'

export type LoginResponse = {
    token: string
}

export type SignupResponse = {
    user: User
}

export type UserResponse = {
    user: User
}

export type CsrfResponse = {
    _csrf: string
}
