import { AUTH_ROUTES, PROTECTED_ROUTES, PUBLIC_ROUTES } from '@src/constants';
import {
  AuthLayout,
  HomePage,
  LoginPage,
  MainLayout,
  NotFoundPage,
  RegisterCredentialsPage,
  RegisterPage,
} from '@src/pages';
import { type RouteObject } from 'react-router-dom';

export const APP_ROUTES: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: AUTH_ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: AUTH_ROUTES.REGISTER,
        element: <RegisterPage />,
      },
      {
        path: AUTH_ROUTES.REGISTER_CREDENTIALS,
        element: <RegisterCredentialsPage />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: PROTECTED_ROUTES.HOME,
        element: <HomePage />,
      },
    ],
  },
  {
    path: PUBLIC_ROUTES.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: PUBLIC_ROUTES.ANY,
    element: <NotFoundPage />,
  },
];
