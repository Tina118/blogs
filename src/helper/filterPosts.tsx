import {formatData} from './formatData'

export const filterPosts = (posts:any,query:string) => {
    const postsList = posts.flat()

    const filterByName = postsList.filter(({ name }:any) => {
        
        return name.toLowerCase().includes(query.toLowerCase());
      });

    const filterByEmail = postsList.filter(({ email }:any) => {
        return email.toLowerCase().includes(query.toLowerCase());
      });

    const filterByComments = postsList.filter(({ body }:any) => {
        return body.toLowerCase().includes(query.toLowerCase());
      });

      const filteredPost = [...filterByName,...filterByEmail,...filterByComments]

      return formatData(filteredPost,3,[])

    
}