import { useEffect, useState, type FC, type PropsWithChildren } from 'react'
import { ThemeContext } from './theme-context'
import type { Theme, ThemeProviderProps } from './types'

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  defaultTheme = 'system',
  storageKey = 'ui-theme',
  ...props
}) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
