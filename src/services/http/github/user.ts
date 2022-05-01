export async function getUser(username: string): Promise<Github.User> {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const data = await response.json()
  return data
}
