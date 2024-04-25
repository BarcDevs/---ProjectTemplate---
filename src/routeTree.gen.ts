/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as authVerifyImport } from './routes/(auth)/verify'
import { Route as authSignupImport } from './routes/(auth)/signup'
import { Route as authLoginImport } from './routes/(auth)/login'
import { Route as authForgotPasswordImport } from './routes/(auth)/forgot-password'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const authVerifyRoute = authVerifyImport.update({
  path: '/verify',
  getParentRoute: () => rootRoute,
} as any)

const authSignupRoute = authSignupImport.update({
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const authForgotPasswordRoute = authForgotPasswordImport.update({
  path: '/forgot-password',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/forgot-password': {
      preLoaderRoute: typeof authForgotPasswordImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login': {
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/signup': {
      preLoaderRoute: typeof authSignupImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/verify': {
      preLoaderRoute: typeof authVerifyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  authForgotPasswordRoute,
  authLoginRoute,
  authSignupRoute,
  authVerifyRoute,
])

/* prettier-ignore-end */
