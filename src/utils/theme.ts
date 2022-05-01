type Theme = 'light' | 'dark'

const kStorage = 'dev_finder:theme'

export function themeSetup() {
  const colorPreference = localStorage.getItem(kStorage) as Theme

  if (colorPreference) {
    setTheme(colorPreference)
    return
  }

  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

  localStorage.setItem(kStorage, preference)
}

export function getTheme(): Theme {
  const theme = localStorage.getItem(kStorage) as Theme
  return theme || 'light'
}

export function setTheme(theme: Theme) {
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.classList.add(theme)

  localStorage.setItem(kStorage, theme)
}

export function toggleTheme() {
  const current = localStorage.getItem(kStorage)

  if (current === 'dark') {
    setTheme('light')
  } else {
    setTheme('dark')
  }
}
