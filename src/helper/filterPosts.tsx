import { formatData } from './formatData'

export const filterPosts = (posts: any, query: string) => {
  //return posts array if query is empty
  if (query === '') return posts

  //convert an array of posts into single array 
  const postsList = posts.flat()

  //filter out the post by name
  const filterByName = postsList.filter(({ name }: any) =>
    name.toLowerCase().includes(query.toLowerCase()),
  )

  //filter out post by email
  const filterByEmail = postsList.filter(({ email }: any) =>
    email.toLowerCase().includes(query.toLowerCase()),
  )

  //filter out the unique post as there might be post that got filtered by name and email both to avoid displaying same post twice
  const filteredPost = [...filterByName, ...filterByEmail].reduce(
    (accumulator, current) => {
      if (!accumulator.some((item: { id: any }) => item.id === current.id)) {
        accumulator.push(current)
      }
      return accumulator
    },
    [],
  )

  //format filtered post into arrays of post have 3 object of post in each array
  return formatData(filteredPost, 3, [])
}
