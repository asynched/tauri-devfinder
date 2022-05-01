import createBox from 'blackbox.js'

import { getTheme, toggleTheme as domToggleTheme } from '@/util/theme'

const themeBox = createBox(getTheme())

export function toggleTheme() {
  themeBox.set(() => {
    domToggleTheme()
    return getTheme()
  })
}

export default themeBox
