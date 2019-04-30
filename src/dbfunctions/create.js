import db from '../db/db';
export const makePost = (data) =>
    db.collections.get('posts').create(post => {
    post.title = data.title
    post.subtitle = `ID: ${data.subtitle}`
    post.body = data.body
  });

 export const makeBlog = (i) =>
  db.collections.get('blogs').create(blog => {
    blog.name =  i
  });

  export const makeComment = (data,post)=>
    db.collections.get('comments').create(comment=>{
      comment.body=data.body
      comment.isNasty=false
      comment.post.set(post)
    })