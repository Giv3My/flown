import { type FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './theme-provider'
import { router } from 'router'

export const Providers: FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={true}
        theme="light"
        pauseOnFocusLoss
        draggable
        pauseOnHover
        stacked
      />
    </ThemeProvider>
  )
}
