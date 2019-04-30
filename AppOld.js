/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button } from "react-native";
import database from "./src/db/db";
import Routes from './src/Routes';
import * as dbfunctions from "./src/dbfunctions/create";
import * as getDbfunctions from "./src/dbfunctions/getData";
import * as updateDbfunctions from "./src/dbfunctions/updateData";

export default class App extends Component {
	state = {
		title: "",
		subtitle: "",
		body: "",
		blog: ""
	};

	componentDidMount() {
		console.log("hey");
		getDbfunctions
			.getPost(database)
			.then(res => {
				console.log(res, "this is the result of stored data");
			})
			.catch(err => {
				console.error(err);
			});
	}
	onChange = id => value => {
		this.setState({ [id]: value });
	};

	onSubmit = () => {
		let { title, subtitle, blog, body } = this.state;
		console.log(blog, "the blog vlaue");
		dbfunctions.makePost(database, blog, { title, subtitle, body }).then(res => {
			console.log(res, "the result i have stored in teh");
		});
		console.log(title, subtitle);
	};
	onUpdate = () => {
		let { title, subtitle, blog, body } = this.state;
		console.log(blog, "the blog vlaue");
		updateDbfunctions.updataePost({ title, subtitle, body,blog }).then(res => {
			console.log(res, "the result i have stored in teh");
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={{ marginVertical: 15, borderBottomColor: "#bbb", borderBottomWidth: 2 }}>
					<Text>Title</Text>
					<TextInput onChangeText={this.onChange("title")} />
				</View>
				<View style={{ marginVertical: 15, borderBottomColor: "#bbb", borderBottomWidth: 2 }}>
					<Text>subtitle</Text>
					<TextInput onChangeText={this.onChange("subtitle")} />
				</View>
				<View style={{ marginVertical: 15, borderBottomColor: "#bbb", borderBottomWidth: 2 }}>
					<Text>body</Text>
					<TextInput onChangeText={this.onChange("body")} />
				</View>
				<View style={{ marginVertical: 15, borderBottomColor: "#bbb", borderBottomWidth: 2 }}>
					<Text>blog</Text>
					<TextInput multiline={true} onChangeText={this.onChange("blog")} />
				</View>

				<View style={{ marginVertical: 40 }}>
					<Button title="Add New Post" onPress={this.onSubmit} />
				</View>

				<View style={{ marginVertical: 10 }}>
					<Button title="Update Post" onPress={this.onUpdate} />
				</View>

				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>To get started, edit App.js</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		justifyContent: "center",
		backgroundColor: "#F5FCFF"
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	}
});
