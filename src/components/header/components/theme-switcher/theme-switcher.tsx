import { useState, type FC } from 'react'
import { useTheme } from 'providers/theme-provider'
import { Switch } from 'components'
import { SunDim, Moon } from 'lucide-react'

export const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme()
  const [checked, setChecked] = useState(() => {
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

      return systemTheme === 'dark'
    }

    return theme === 'dark'
  })

  const onThemeSwitch = (checked: boolean) => {
    setChecked(checked)

    if (checked) {
      setTheme('dark')
      return
    }

    setTheme('light')
  }

  return (
    <div>
      <Switch className="border-elevated-1" checked={checked} onCheckedChange={onThemeSwitch}>
        <span className="flex items-center justify-center size-full">
          {theme === 'light' ? (
            <SunDim className="size-3" />
          ) : (
            <Moon className="size-3 text-[#fff]" />
          )}
        </span>
      </Switch>
    </div>
  )
}
