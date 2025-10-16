export const AUTH_ROUTES = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  REGISTER_CREDENTIALS: '/auth/register/credentials',
}

export const AUTH_ROUTES_ARRAY = Object.values(AUTH_ROUTES)

export const PROTECTED_ROUTES = {
  HOME: '/',
}

export const PROTECTED_ROUTES_ARRAY = Object.values(PROTECTED_ROUTES)

export const PUBLIC_ROUTES = {
  NOT_FOUND: '/404',
  ANY: '*',
}

export const PUBLIC_ROUTES_ARRAY = Object.values(PUBLIC_ROUTES)
