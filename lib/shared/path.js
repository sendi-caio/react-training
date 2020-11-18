import { join, relative, resolve, extname, parse } from 'path'
export const rootPath = resolve('.')

export const srcPath = join(rootPath, 'src')
export const libPath = join(rootPath, 'lib')
export const dataPath = join(rootPath, 'data')

export const dataDbPath = join(dataPath, 'db')
export const dataApiPath = join(dataPath, 'api')
export const dataUploadPath = join(dataPath, 'upload')

export const docPath = join(libPath, 'doc')
export const assetPath = join(libPath, 'asset')
export const sharedPath = join(libPath, 'shared')
export const backendPath = join(libPath, 'backend')

export const faviconPath = join(assetPath, 'favicon.ico')
export const path = { join, relative, resolve, extname, parse }

export function relativeToBackend(...parameters) {
  return `./${join(relative(rootPath, backendPath), ...parameters)}`
}

export function relativeToLib(...parameters) {
  return `./${join(relative(rootPath, libPath), ...parameters)}`
}

export function relativeToDoc(...parameters) {
  return `./${join(relative(rootPath, docPath), ...parameters)}`
}

export const defaultPort = {
  api: 3000,
}
