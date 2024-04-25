import {Role} from '@/types/user.ts'

export type SearchParams = {
    filter?: undefined
    tag?: string
    category?: string
    search?: string
}

export type RouterContext = {
    auth: {
        isLoggedIn: boolean
        role?: Role
    }
}
