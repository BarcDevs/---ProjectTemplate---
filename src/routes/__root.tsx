import {createRootRouteWithContext} from '@tanstack/react-router'
import RootLayout from '@/pages/layouts/RootLayout.tsx'
import {RouterContext} from '@/types/router.ts'
import NotFoundPage from '@/pages/error/NotFoundPage.tsx'
import ErrorPage from '@/pages/error/ErrorPage.tsx'

export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootLayout,
    notFoundComponent: () => <NotFoundPage/>,
    errorComponent: () => <ErrorPage/>
})
