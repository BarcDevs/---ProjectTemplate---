export type Role = 'USER' | 'ADMIN'

export type User = {
    id: string
    firstName: string
    lastName: string
    username: string
    image?: string
    email: string
    role: Role
}
