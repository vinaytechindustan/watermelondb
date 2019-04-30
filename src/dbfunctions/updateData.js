import db from "../db/db";
export const updataePost = data =>
	db.collections
		.get("posts")
		.find("sdnxm2flb5uh7qtf")
		.then(postToUpdate => {
			postToUpdate.update(post => {
				post.title = data.title;
				post.subtitle = `ID: ${data.subtitle}`;
				post.body = data.body;
				post.blog_id = data.blog;
			});
		});
