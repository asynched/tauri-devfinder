import createBox from 'blackbox.js'

import { getTheme, toggleTheme as domToggleTheme } from '@/utils/theme'

const themeBox = createBox(getTheme())

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
  themeBox.set(() => {
    domToggleTheme()
    return getTheme()
  })
}

export default themeBox
