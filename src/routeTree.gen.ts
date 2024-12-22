/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as NotificationsImport } from './routes/notifications'
import { Route as IndexImport } from './routes/index'
import { Route as MessagesIndexImport } from './routes/messages/index'
import { Route as TagTagImport } from './routes/tag.$tag'
import { Route as MessagesConvoIdImport } from './routes/messages/$convoId'
import { Route as ProfileHandleIndexImport } from './routes/profile/$handle/index'
import { Route as ProfileHandlePostPostIdImport } from './routes/profile/$handle/post.$postId'

// Create Virtual Routes

const SettingsLazyImport = createFileRoute('/settings')()
const LoginLazyImport = createFileRoute('/login')()

// Create/Update Routes

const SettingsLazyRoute = SettingsLazyImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/settings.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const NotificationsRoute = NotificationsImport.update({
  id: '/notifications',
  path: '/notifications',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const MessagesIndexRoute = MessagesIndexImport.update({
  id: '/messages/',
  path: '/messages/',
  getParentRoute: () => rootRoute,
} as any)

const TagTagRoute = TagTagImport.update({
  id: '/tag/$tag',
  path: '/tag/$tag',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/tag.$tag.lazy').then((d) => d.Route))

const MessagesConvoIdRoute = MessagesConvoIdImport.update({
  id: '/messages/$convoId',
  path: '/messages/$convoId',
  getParentRoute: () => rootRoute,
} as any)

const ProfileHandleIndexRoute = ProfileHandleIndexImport.update({
  id: '/profile/$handle/',
  path: '/profile/$handle/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileHandlePostPostIdRoute = ProfileHandlePostPostIdImport.update({
  id: '/profile/$handle/post/$postId',
  path: '/profile/$handle/post/$postId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/notifications': {
      id: '/notifications'
      path: '/notifications'
      fullPath: '/notifications'
      preLoaderRoute: typeof NotificationsImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsLazyImport
      parentRoute: typeof rootRoute
    }
    '/messages/$convoId': {
      id: '/messages/$convoId'
      path: '/messages/$convoId'
      fullPath: '/messages/$convoId'
      preLoaderRoute: typeof MessagesConvoIdImport
      parentRoute: typeof rootRoute
    }
    '/tag/$tag': {
      id: '/tag/$tag'
      path: '/tag/$tag'
      fullPath: '/tag/$tag'
      preLoaderRoute: typeof TagTagImport
      parentRoute: typeof rootRoute
    }
    '/messages/': {
      id: '/messages/'
      path: '/messages'
      fullPath: '/messages'
      preLoaderRoute: typeof MessagesIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/$handle/': {
      id: '/profile/$handle/'
      path: '/profile/$handle'
      fullPath: '/profile/$handle'
      preLoaderRoute: typeof ProfileHandleIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/$handle/post/$postId': {
      id: '/profile/$handle/post/$postId'
      path: '/profile/$handle/post/$postId'
      fullPath: '/profile/$handle/post/$postId'
      preLoaderRoute: typeof ProfileHandlePostPostIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/notifications': typeof NotificationsRoute
  '/login': typeof LoginLazyRoute
  '/settings': typeof SettingsLazyRoute
  '/messages/$convoId': typeof MessagesConvoIdRoute
  '/tag/$tag': typeof TagTagRoute
  '/messages': typeof MessagesIndexRoute
  '/profile/$handle': typeof ProfileHandleIndexRoute
  '/profile/$handle/post/$postId': typeof ProfileHandlePostPostIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/notifications': typeof NotificationsRoute
  '/login': typeof LoginLazyRoute
  '/settings': typeof SettingsLazyRoute
  '/messages/$convoId': typeof MessagesConvoIdRoute
  '/tag/$tag': typeof TagTagRoute
  '/messages': typeof MessagesIndexRoute
  '/profile/$handle': typeof ProfileHandleIndexRoute
  '/profile/$handle/post/$postId': typeof ProfileHandlePostPostIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/notifications': typeof NotificationsRoute
  '/login': typeof LoginLazyRoute
  '/settings': typeof SettingsLazyRoute
  '/messages/$convoId': typeof MessagesConvoIdRoute
  '/tag/$tag': typeof TagTagRoute
  '/messages/': typeof MessagesIndexRoute
  '/profile/$handle/': typeof ProfileHandleIndexRoute
  '/profile/$handle/post/$postId': typeof ProfileHandlePostPostIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/notifications'
    | '/login'
    | '/settings'
    | '/messages/$convoId'
    | '/tag/$tag'
    | '/messages'
    | '/profile/$handle'
    | '/profile/$handle/post/$postId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/notifications'
    | '/login'
    | '/settings'
    | '/messages/$convoId'
    | '/tag/$tag'
    | '/messages'
    | '/profile/$handle'
    | '/profile/$handle/post/$postId'
  id:
    | '__root__'
    | '/'
    | '/notifications'
    | '/login'
    | '/settings'
    | '/messages/$convoId'
    | '/tag/$tag'
    | '/messages/'
    | '/profile/$handle/'
    | '/profile/$handle/post/$postId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  NotificationsRoute: typeof NotificationsRoute
  LoginLazyRoute: typeof LoginLazyRoute
  SettingsLazyRoute: typeof SettingsLazyRoute
  MessagesConvoIdRoute: typeof MessagesConvoIdRoute
  TagTagRoute: typeof TagTagRoute
  MessagesIndexRoute: typeof MessagesIndexRoute
  ProfileHandleIndexRoute: typeof ProfileHandleIndexRoute
  ProfileHandlePostPostIdRoute: typeof ProfileHandlePostPostIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  NotificationsRoute: NotificationsRoute,
  LoginLazyRoute: LoginLazyRoute,
  SettingsLazyRoute: SettingsLazyRoute,
  MessagesConvoIdRoute: MessagesConvoIdRoute,
  TagTagRoute: TagTagRoute,
  MessagesIndexRoute: MessagesIndexRoute,
  ProfileHandleIndexRoute: ProfileHandleIndexRoute,
  ProfileHandlePostPostIdRoute: ProfileHandlePostPostIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/notifications",
        "/login",
        "/settings",
        "/messages/$convoId",
        "/tag/$tag",
        "/messages/",
        "/profile/$handle/",
        "/profile/$handle/post/$postId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/notifications": {
      "filePath": "notifications.tsx"
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    },
    "/settings": {
      "filePath": "settings.lazy.tsx"
    },
    "/messages/$convoId": {
      "filePath": "messages/$convoId.tsx"
    },
    "/tag/$tag": {
      "filePath": "tag.$tag.tsx"
    },
    "/messages/": {
      "filePath": "messages/index.tsx"
    },
    "/profile/$handle/": {
      "filePath": "profile/$handle/index.tsx"
    },
    "/profile/$handle/post/$postId": {
      "filePath": "profile/$handle/post.$postId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
