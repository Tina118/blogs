import { formatData } from './formatData'

export const filterPosts = (posts: any, query: string) => {
  if (query === '') return posts

  const postsList = posts.flat()

  const filterByName = postsList.filter(({ name }: any) =>
    name.toLowerCase().includes(query.toLowerCase()),
  )

  const filterByEmail = postsList.filter(({ email }: any) =>
    email.toLowerCase().includes(query.toLowerCase()),
  )

  const filteredPost = [...filterByName, ...filterByEmail].reduce(
    (accumulator, current) => {
      if (!accumulator.some((item: { id: any }) => item.id === current.id)) {
        accumulator.push(current)
      }
      return accumulator
    },
    [],
  )

  return formatData(filteredPost, 3, [])
}
