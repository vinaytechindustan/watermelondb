import Post from "../model/Post";
import Comment from "../model/Comment";
import Blog from "../model/Blog";
import { mySchema } from "../model/schema";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
const adapter = new SQLiteAdapter({
	dbName: "WatermelonDemo",
	schema: mySchema
});
const database = new Database({
	adapter,
	modelClasses: [Blog, Post, Comment]
});
console.log(database,'the database is created');
export default database;
