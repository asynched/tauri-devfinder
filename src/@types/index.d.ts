namespace Github {
  export type User = {
    login: string
    avatar_url: string
    html_url: string
    followers: number
    following: number
    created_at: string
    public_repos: number
    name: string
    company: string | null
    location: string | null
    twitter_username: string | null
    bio: string | null
  }
}
