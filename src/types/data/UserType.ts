import { Role } from '@prisma/client'
import { Prettify } from '../index'

export type UserType = {
    id: string
    firstName: string
    lastName: string
    username: string
    email: string
    image?: string
    role: Role
}

export type ServerUserType = Prettify<
    UserType & {
        password: string
        resetPasswordOTP?: number
        resetPasswordExpiration?: Date
        password_updated_at: Date
        created_at: Date
        active: boolean
        deleted_at?: Date
    }
>

export type NewUserType = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
}
