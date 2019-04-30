import React, { Component } from "react";
import { View, Text, TextInput, Button,ScrollView } from "react-native";
import * as createDbFunctions from "../dbfunctions/create";
import withObservables from "@nozbe/with-observables";
class Post extends Component {
	state = {
		post: {},
		comment: ""
	};

	componentDidMount() {
		const post = this.props.navigation.getParam("post");
		console.log(
			post.comments.fetch().then(res => {
				console.log(res, "the result");
			}),
			"observer coutnt"
		);
		this.setState({ post });
	}

	_onChange = comment => {
		this.setState({ comment });
	};
	_onSubmit = () => {
		const { comment } = this.state;

		createDbFunctions
			.makeComment({ body: comment }, this.props.navigation.getParam("post"))
			.then(res => {
				console.log(res, "the response i get from server is");
			});
	};

	render() {
		const post = this.props.navigation.getParam("post");
		console.log(this.props, "the state post");
		return (
			<View style={{flex:1}}>
                <View style={{flex:1}}>
				<Text>Title : {post.title}</Text>
				<Text>SubTitle: {post.subtitle}</Text>
				<View style={{ marginTop: "30%" }}>
					<Text>Comments</Text>
					<TextInput onChangeText={this._onChange} />
					<Button title="Submit" onPress={this._onSubmit} />
				</View>
                </View>
				<ScrollView style={{backgroundColor:"red",flex:1 }}>
					{this.props.comments.map(comment => (
						<Text
							style={{ marginVertical: 10, padding: 20, backgroundColor: "#ccc" }}
							key={comment.id}>
							{comment.body}
						</Text>
					))}
				</ScrollView>
			</View>
		);
	}
}
const enhance = withObservables(["post"], ({ post }) => ({
	post,
	comments: post.comments // Shortcut syntax for `post.comments.observe()`
}));

export default enhance(Post);
