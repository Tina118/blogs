import {formatData} from './formatData'

export const filterPosts = (posts:any,query:string) => {
    if(query==="") return posts;
    
    const postsList = posts.flat()

    const filterByName = postsList.filter(({ name }:any) => {
        
        return name.toLowerCase().includes(query.toLowerCase());
      });

    const filterByEmail = postsList.filter(({ email }:any) => {
        return email.toLowerCase().includes(query.toLowerCase());
      });


      const filteredPost = [...filterByName,...filterByEmail]


      return formatData(filteredPost,3,[])

    
}