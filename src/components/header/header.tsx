import type { FC } from 'react'
import { Logo, ThemeSwitcher } from './components'

export const Header: FC = () => {
  return (
    <div className="p-4 bg-surface-2 rounded-b-2xl">
      <div className="max-w-[90vw] mx-auto flex items-center justify-between">
        <Logo />
        <ThemeSwitcher />
      </div>
    </div>
  )
}
