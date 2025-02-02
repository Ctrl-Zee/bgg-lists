/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CollectionImport } from './routes/collection'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const CollectionRoute = CollectionImport.update({
  id: '/collection',
  path: '/collection',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
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
    '/collection': {
      id: '/collection'
      path: '/collection'
      fullPath: '/collection'
      preLoaderRoute: typeof CollectionImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/collection': typeof CollectionRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/collection': typeof CollectionRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/collection': typeof CollectionRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/collection'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/collection'
  id: '__root__' | '/' | '/collection'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CollectionRoute: typeof CollectionRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CollectionRoute: CollectionRoute,
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
        "/collection"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/collection": {
      "filePath": "collection.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
