import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'components'

export const MainLayout: FC = () => {
  return (
    <div className="min-h-dvh bg-surface-0">
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}
