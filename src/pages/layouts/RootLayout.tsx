import * as Sentry from '@sentry/react'
import {Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import Header from '@/components/layout/root/Header.tsx'
import {useLocalStorage} from '@/hooks/useLocalStorage.ts'
import Footer from '@/components/layout/root/Footer.tsx'
import config from '@/config'

const RootLayout = Sentry.withProfiler(
    ({}) => {
        useLocalStorage()

        return (
            <>
                <Header/>
                <Outlet/>
                <Footer/>
                {config.env === 'development' &&
                    <TanStackRouterDevtools/>
                }
            </>
        )
    })


export default RootLayout
