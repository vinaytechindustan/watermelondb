import db from '../db/db'
export const getAllPost = () =>
    db.collections.get('posts').query().fetch();