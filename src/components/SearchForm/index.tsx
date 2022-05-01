import { useState } from 'react'
import { preventDefault } from '@/util/events'
import { SearchIcon } from '@heroicons/react/outline'

type SearchFormProps = {
  onSearch: (user: string) => void | Promise<void>
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [input, setInput] = useState('')

  const handleSearchEvent = () => {
    onSearch(input)
    setInput('')
  }

  return (
    <form
      onSubmit={preventDefault(handleSearchEvent)}
      className="mb-8 p-2 wrapper flex items-center dark:bg-theme-800 rounded-lg shadow-slate-200 shadow-xl dark:shadow-none"
    >
      <SearchIcon className="w-6 h-6 ml-2 mr-4 text-blue-500" />
      <input
        className="bg-transparent outline-none flex-1"
        placeholder="Search GitHub username..."
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="ml-auto text-white bg-blue-500 py-2 px-4 rounded-lg">
        Search
      </button>
    </form>
  )
}
