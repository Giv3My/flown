import { createContext } from 'react'
import type { ThemeContextState } from './types'

const initialState: ThemeContextState = {
  theme: 'light',
  setTheme: () => null,
}

export const ThemeContext = createContext<ThemeContextState>(initialState)
