/**
 * Theme is an enum of the available themes, those being 'light' and 'dark'.
 */
type Theme = 'light' | 'dark'

const kStorage = 'dev_finder:theme'

/**
 * Initializer for the theme configurations, must be executed on app startup.
 *
 * ## Example
 *
 * ```tsx
 * useEffect(themeSetup, [])
 * ```
 */
export function themeSetup() {
  const colorPreference = localStorage.getItem(kStorage) as Theme

  if (colorPreference) {
    setTheme(colorPreference)
    return
  }

  // If the key doesn't exist in local storage, initialize the application
  // with the user default preference in the OS.
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

  localStorage.setItem(kStorage, preference)
}

/**
 * Helper function for getting the current application theme.
 *
 * ## Example
 *
 * ```tsx
 * getTheme() // 'light' | 'dark'
 * ```
 *
 * @returns The current application theme.
 */
export function getTheme(): Theme {
  const theme = localStorage.getItem(kStorage) as Theme

  // Defaults the theme to light if the key
  // doesn't exist in the local storage.
  return theme || 'light'
}

/**
 * Helper function for setting the application theme.
 *
 * ## Example
 *
 * ```tsx
 * setTheme('dark') // void
 * ```
 *
 * @param theme Sets the application theme.
 */
export function setTheme(theme: Theme) {
  // Clears the document class list and adds the theme
  // passed in as a parameter. This is mainly due to
  // the document.classList.add() method concatenating
  // both 'light' and 'dark' classes.
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.classList.add(theme)

  localStorage.setItem(kStorage, theme)
}

/**
 * Toggles the application theme from dark to light and vice versa.
 *
 * ## Example
 *
 * ```tsx
 * toggleTheme() // void
 * ```
 */
export function toggleTheme() {
  const current = localStorage.getItem(kStorage)

  if (current === 'dark') {
    setTheme('light')
  } else {
    setTheme('dark')
  }
}
