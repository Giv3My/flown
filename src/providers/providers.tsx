import { type FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './theme-provider'
import { router } from 'router'

export const Providers: FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
