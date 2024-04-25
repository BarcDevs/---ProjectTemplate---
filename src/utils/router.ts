import {createRouter} from '@tanstack/react-router'
import {routeTree} from '@/routeTree.gen.ts'

export const router = createRouter({
    routeTree,
    context: {
        auth: {
            isLoggedIn: undefined!
        }
    }
})
