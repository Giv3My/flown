export type Theme = 'dark' | 'light' | 'system'

export type ThemeContextState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export type ThemeProviderProps = {
  defaultTheme?: Theme
  storageKey?: string
}
