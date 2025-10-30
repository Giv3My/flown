import type { PropsWithChildren } from 'react'

export type Theme = 'dark' | 'light' | 'system'

export interface ThemeContextState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export interface ThemeProviderProps extends PropsWithChildren {
  defaultTheme?: Theme
  storageKey?: string
}
