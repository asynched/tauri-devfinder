import { useBox } from 'blackbox.js'
import themeBox, { toggleTheme } from '@/stores/theme'

import { LightBulbIcon, MoonIcon } from '@heroicons/react/outline'

export default function Heading() {
  const theme = useBox(themeBox)

  return (
    <div className="mb-8 wrapper flex justify-between rounded">
      <h1 className="text-4xl font-bold tracking-tighter">devfinder</h1>
      <button onClick={toggleTheme} className="flex items-center gap-2">
        {theme === 'light' ? (
          <>
            <MoonIcon className="w-4 h-4" />
            DARK
          </>
        ) : (
          <>
            <LightBulbIcon className="w-4 h-4" />
            LIGHT
          </>
        )}
      </button>
    </div>
  )
}
