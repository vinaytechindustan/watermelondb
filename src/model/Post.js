import { Model } from '@nozbe/watermelondb'
import { field, relation, children } from '@nozbe/watermelondb/decorators'

export default class Post extends Model {
  static table = 'posts'

  static associations = {
    comments: { type: 'has_many', foreignKey: 'post_id' },
  }

  @field('title')
  title

  @field('subtitle')
  subtitle

  @field('body')
  body

  @children('comments')
  comments

  async addComment(body) {
    return this.collections.get('comments').create(comment => {
      comment.post.set(this)
      comment.body = body
    })
  }
}
