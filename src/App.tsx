import { useEffect, useState } from 'react'

import { octocat } from '@/util/data'
import { themeSetup } from '@/util/theme'

import { getUser } from '@/services/http/github/user'

import SearchForm from '@/components/SearchForm'
import Heading from '@/components/Heading'
import UserInfo from '@/components/UserInfo'

function App() {
  const [user, setUser] = useState<Github.User>(octocat)

  const onSearch = async (username: string) => {
    const user = await getUser(username)
    setUser(user)
  }

  useEffect(themeSetup, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-800 dark:bg-theme-900 dark:text-white">
      <Heading />
      <SearchForm onSearch={onSearch} />
      <UserInfo user={user} />
    </div>
  )
}

export default App
