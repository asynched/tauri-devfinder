import { parseDate } from '@/util/dates'
import {
  LinkIcon,
  LocationMarkerIcon,
  OfficeBuildingIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'

type UserInfoProps = {
  user: Github.User
}

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="p-8 wrapper grid grid-cols-3 gap-8 dark:bg-theme-800 rounded-lg shadow-slate-200 shadow-xl dark:shadow-none">
      <img className="rounded-full" src={user.avatar_url} alt={user.name} />
      <div className="col-span-2">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tighter">{user.name}</h2>
          <p className="dark:text-gray-200">
            Joined {parseDate(user.created_at)}
          </p>
        </div>
        <p className="mb-2 text-blue-600">@{user.login}</p>
        <p className="mb-4 dark:text-gray-200">
          {user.bio || 'This profile has no bio.'}
        </p>
        <div className="mb-4 grid grid-cols-3 bg-gray-100 dark:bg-theme-900 p-4 rounded-lg">
          <div>
            <p>Repos</p>
            <p className="font-bold text-lg tracking-tighter">
              {user.public_repos}
            </p>
          </div>
          <div>
            <p>Followers</p>
            <p className="font-bold text-lg tracking-tighter">
              {user.followers}
            </p>
          </div>
          <div>
            <p>Following</p>
            <p className="font-bold text-lg tracking-tighter">
              {user.following}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <LocationMarkerIcon className="w-5 h-5" />
            <p className="dark:text-gray-200">
              {user.location || 'Not available'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <UserGroupIcon className="w-5 h-5" />
            <p className="dark:text-gray-200">
              {user.twitter_username || 'Not available'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon className="w-5 h-5" />
            <a
              target="_blank"
              href={user.html_url}
              className="dark:text-gray-200"
            >
              @{user.login}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <OfficeBuildingIcon className="w-5 h-5" />
            <p className="dark:text-gray-200">
              {user.company || 'Not available'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
